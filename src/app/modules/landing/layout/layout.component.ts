import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { IResearch } from 'src/app/core/models/research';
import { CommonService } from 'src/app/core/services/common.service';
import { ResearchService } from 'src/app/core/services/research.service';
import { IIndustry, IIndustryEx } from '../interface';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper/core';

declare var ymaps: any;

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  industrieId: number = -1;
  searchControl = new FormControl();
  industries: IIndustry[] = [];

  selectedIndustrie: IIndustry = { 
    id: -1, 
    name: 'Все' 
  };

  research: IResearch[] = [];
  industriesEx: IIndustryEx[] = [];
  noData = false;
  loading = false;

  programs = [
    { 
      id: 1, 
      title: 'Правоохранительная деятельность',
      img: 'security.jpg'
    },
    { 
      id: 2, 
      title: 'Международное право',
      img: 'international.jpg'
    },
    { 
      id: 3, 
      title: 'Финансы',
      img: 'finance.jpg'
    },
    { 
      id: 4, 
      title: 'Юриспруденция',
      img: 'law.jpg'
    },
    { 
      id: 5, 
      title: 'Таможенное дело',
      img: 'express.jpg'
    },
    { 
      id: 6, 
      title: 'Государственное и местное управление',
      img: 'team.jpg'
    },
  ];

  news = [
    {
      id: 1,
      title: 'Колледж им. Д.А. Кунаева вошел в рейтинг The Times Higher Education',
    },
    {
      id: 2,
      title: 'Колледж им. Д.А. Кунаева продолжает расти в рейтинге QS World University Rankings',
    },
    {
      id: 3,
      title: 'Колледж им. Д.А. Кунаева предлагает дополнительные льготы для вакцинированных студентов и сотрудников',
    },
    {
      id: 4,
      title: 'Колледж им. Д.А. Кунаева – открытая дверь в мир новых возможностей',
    }
  ];

  swiperParams: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.slide-next',
      prevEl: '.slide-prev'
    },
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 0
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  map: any;
  @ViewChild('yaMap', {static: true}) yaMap: ElementRef;

  constructor(
    private service: CommonService,
    private researchService: ResearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);

    ymaps.ready()
      .then(() => {
        this.map = new ymaps.Map(
          this.yaMap.nativeElement,
          {
              center: [43.252188, 76.950253],
              zoom: 15,
              controls: []
          },
          {searchControlProvider: 'yandex#search'}
      );
      })
      .catch(() => console.log('Failed to load Yandex Maps'));

    this.searchControl.valueChanges
    .pipe(
      tap(_ => {
        this.loading = true;
      }),
      debounceTime(500)
    )
    .subscribe(res => {
      let searchText = res.toLocaleLowerCase();
      this.industriesEx.forEach(ind => {
        ind.research.forEach(res2 => {
          res2.hide = !res2.name.toLocaleLowerCase().includes(searchText);
        });
        ind['hide'] = ind.research.length === ind.research.filter(f => f.hide).length ? true : false;
      });
      this.noData = this.industriesEx.length === this.industriesEx.filter(f => f.hide).length ? true : false;
      this.loading = false;
    });

    this.loadData();

    
  }

  loadData() {
    this.loading = true;
    forkJoin([
      this.service.getIndustries(),
      this.researchService.getResearch()
    ])
    .subscribe(res => {
      this.industries = res[0];
      this.industries.unshift(this.selectedIndustrie);
      this.research = res[1];
      this.transformData(this.research);
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  selectIndustrie(ind: IIndustry) {
    this.selectedIndustrie = ind;
    this.loading = true;
    this.researchService.getResearchByIndId(ind.id).subscribe(res => {
      if (ind.id === -1) {
        this.transformData(res);
      } else {
        this.industriesEx = [{
            id: ind.id,
            name: ind.name,
            research: res
        }];
      }
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
  }

  transformData(research: IResearch[]) {
    this.industriesEx = this.industries.map(r => {
      let data = research.filter(f => f.industrieId === r.id);
      return {
        id:r.id,
        name:r.name,
        research: data
      }
    });
  }

}

