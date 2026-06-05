export type tTasks = {
  "question": string;
  "answer": string;
}[]

export type tQuizzes = {
  "id": number,
  "type": "M" | "S" , /* типы заданий, М - сопоставление*/
  "title": string, /* формулировка задания */
  "tasks": tTasks,
}[];

export type tChoise = {
  "question": string;
  "answer": boolean;
}[];
export type tChoisses = {
  "id": number,
  "type": "CO" | "CS", /* типы заданий, М - сопоставление*/
  "title": string, /* формулировка задания */
  "choise": tChoise,
}[];

export const quiz: tQuizzes = [
  {
    "id": 1,
    "type": "M",
    "title": "Сопоставьте автомобиль и страну производства.",
    "tasks": [
      {
        "question": "Bugatti Veyron",
        "answer": "Франция"
      },
      {
        "question": "Nissan GT-R (R35)",
        "answer": "Япония"
      },
      {
        "question": "Ferrari 458 Italia",
        "answer": "Италия"
      },
      {
        "question": "Ford Focus (Mk1)",
        "answer": "США"
      },
      {
        "question": "BMW 320d (E46)",
        "answer": "Германия"
      },
    ]
  },
  {
    "id": 2,
    "type": "M",
    "title": "Сопоставьте автомобиль и тип двигателя.",
    "tasks": [
      {
        "question": "Bugatti Veyron",
        "answer": "W16, 4 турбонагнетателя"
      },
      {
        "question": "Ariel Atom (Mk1)",
        "answer": "R4 атмосферный (Honda)"
      },
      {
        "question": "Lexus LFA",
        "answer": "V10 атмосферный"
      },
      {
        "question": "Toyota Prius (XW20)",
        "answer": "Гибрид (R4 + электродвигатель)"
      },
      {
        "question": "Porsche Boxster (986)",
        "answer": "Оппозитный R6"
      },
    ]
  },
  {
    "id": 3,
    "type": "S",
    "title": "Отсортировать автомобили по возрастанию времени разгона (от быстрого к медленному).",
    "tasks": [
      {
        "question": "Ariel Atom (Mk1)",
        "answer": "1"
      },
      {
        "question": "McLaren MP4-12C Spider",
        "answer": "2"
      },
      {
        "question": "Lamborghini Murciélago LP-670-4 SV",
        "answer": "3"
      },
      {
        "question": "Ferrari 458 Italia",
        "answer": "4"
      },
      {
        "question": "Nissan GT-R (R35)",
        "answer": "5"
      },
    ]
  },
  {
    "id": 4,
    "type": "S",
    "title": "Отсортировать автомобили по убыванию объёма двигателя.",
    "tasks": [
      {
        "question": "Bugatti Veyron",
        "answer": "1"
      },
      {
        "question": "Pagani Zonda (C12/C12S)",
        "answer": "2"
      },
      {
        "question": "Rolls-Royce Phantom",
        "answer": "3"
      },
      {
        "question": "Lamborghini Murciélago LP-670-4 SV",
        "answer": "4"
      },
      {
        "question": "Ferrari FF",
        "answer": "5"
      },
    ]
  }
]
export const quiz2: tChoisses = [
  {
    "id": 5,
    "type": "CO",
    "title": "Какой автомобиль имеет самый быстрый разгон до 100 км/ч?",
    "choise": [
      {
        "question": "Bugatti Veyron",
        "answer": true
      },
      {
        "question": "Ariel Atom (Mk1)",
        "answer": false
      },
      {
        "question": "McLaren MP4-12C Spider",
        "answer": false
      },
      {
        "question": "Nissan GT-R (R35)",
        "answer": false
      }
    ]
  },
  {
    id: 6,
    type: "CS",
    title: "Какие автомобили произведены в Японии?",
    choise: [
      {
        question: "Lexus LFA",
        answer: true
      },
      {
        question: "Nissan GT-R (R35)",
        answer: true
      },
      {
        question: "Toyota Prius (XW20)",
        answer: true
      },
      {
        question: "Honda S2000 (AP1)",
        answer: true
      },
      {
        question: "Ferrari 458 Italia",
        answer: false
      }
    ]
  }
]