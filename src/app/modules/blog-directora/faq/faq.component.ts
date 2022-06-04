import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  questions = [
    {
      question:
        'У меня на первом курсе была оценка "С", но я ее пересдал на "В-", остальные оценки "А" и "В", получу ли я диплом с отличием?',
      answer: `
      Согласно п.9.20 "Правил кредитной технологии обучения в КазНИТУ им. К.И. Сатпаева":
"Диплом с отличием выдается студенту, сдавшему экзамены и дифференцированные зачеты с оценками А, А- ("отлично"), В, В, В-, С+ ("хорошо") и имеющему средний балл успеваемости (GPA) за весь период обучения не ниже 3,5, а также защитившему дипломную работу (проект) с оценками А, А- ("отлично"), в случае отсутствия повторных сдач экзаменов в течение всего периода обучения (без учета оценки по военной подготовке).
Примечание: если студент имел оценку "удовлетворительно" и/или "неудовлетворительно" за весь период своего обучения в вузе, диплом с отличием ему не выдается даже в случае имевшейся пересдачи данной оценки на оценку "хорошо" или "отлично" по результатам повторной сдачи экзамена или повторного прохождения дисциплины.
`,
    },
    {
      question: 'Что такое условный статус?',
      answer: `
      Перевод обучающихся на условный статус осуществляется по итогам учебного года (промежуточных аттестаций) с учетом результатов летнего квартала и набранного среднегодового балла успеваемости (GPA). Обучающийся, набравший GPA ниже установленного в КазНИТУ переводного балла (для 1-го года обучения - 1.6 и для последующих периодов - 1.8) переводится на условный статус обучения.
Оплата производится покредитно, исходя из установленной стоимости одного кредита.
Регистрация на дисциплины осуществляется в обычном порядке.
Обучающиеся по государственному образовательному заказу, переводимые на условный статус, лишаются государственного образовательного гранта и обучаются на условном академическом статусе на платной покредитной основе.
При обучении на условном статусе студент может зарегистрироваться на дисциплины в объеме не более 15 кредитов (включая ритейки) за семестр, 9 кредитов за триместр, 6 кредитов за квартал.
Если по окончании любого академического периода обучения на условном статусе студент будет иметь GPA выше переводного, он переводится на обычный академический статус (переводится на полноплатное обучение), при котором регистрируется на количество кредитов, установленное рабочим учебным планом образовательной программы. Если же GPA студента по итогам семестра ниже переводного, он продолжает оставаться на условном академическом статусе в течение следующего академического периода.
`,
    },
  ];
}