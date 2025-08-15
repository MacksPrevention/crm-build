export const productList = [
  { name: 'Курс по верстке', value: 'course-html' },
  { name: 'Курс по JavaScript', value: 'course-js' },
  { name: 'Курс по VUE JS', value: 'course-vue' },
  { name: 'Курс по PHP', value: 'course-php' },
  { name: 'Курс по WordPress', value: 'course-wordpress' },
];

export const productMap = Object.fromEntries(
  productList.map((item) => [item.value, item.name])
);
