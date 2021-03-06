import React from 'react'

const aboutList = [
  `В овсянке содержится большое количество витаминов группы B. Они отвечают в организме за метаболизм и работу
        сердечно-сосудистой системы, а также улучшают состояние кишечника, печени и щитовидной железы.
        Ученые из Кардиффского университета доказали, что овсянка повышает интеллектуальные способности, снижает
        тревожность и помогает работе нервной системы.`,
  `Овсянка поможет справиться с кожными проблемами: например, снизить зуд и воспаление, а также избавиться от
        симптомов экземы. Все благодаря авентрамидам в составе.`,
  `Если овсянка из раза в раз получается жидкой и склизкой, возможно, вы неправильно ее готовите. Попробуйте
        добавлять соль, чаще помешивать кашу и всегда доваривать ее до конца, следуя инструкциям на упаковке, а не
        интуиции.`,
  `Овсянка дарит ощущение приятной сытости на 3-4 часа из-за большого количества углеводов в составе.`
]

const About = ({}) => {

  return (
    <div>
      <div>А вы знаете,что...</div>
      <hr/>
      <ol>
        {aboutList.map(((item, index) => <li key={index + item[2]}>{item}</li>))}
      </ol>
    </div>
  )
}

export default About