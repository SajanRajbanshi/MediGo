const postData = [
  {
    id: 1,
    user: {
      name: "Catylin Stark",
      image: "src/components/homePageComponents/assets/img/pexels-photo-1130626.jpg",
    },
    question: "How can I improve my sleep?",
    content:
      "Improving sleep involves adopting good sleep hygiene practices and making lifestyle changes that promote restful sleep. Start by maintaining a consistent sleep schedule, going to bed and waking up at the same time every day to regulate your body's internal clock. Create a relaxing bedtime routine, such as reading a book or taking a warm bath, and make your sleep environment comfortable by ensuring your bedroom is cool, dark, and quiet. Limit exposure to screens before bed, as the blue light can interfere with your ability to fall asleep. Be mindful of what you eat and drink, avoiding large meals, caffeine.",
    answers: 11,
    upvotes: 154,
    answersList: [{ UserName: "John Doe", Answer: "This Is sample answer." }],
  },
  {
    id: 2,
    user: { name: "Jemmy Lanister", image: "src/components/homePageComponents//assets/img/6.jpg" },
    question: "What are the symptoms of Covid-19?",
    content: `
    COVID-19 symptoms can range from mild to severe. The most common symptoms include fever, cough, and shortness of breath.
    Other symptoms may include fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose
    and nausea or vomiting. Some people may also experience diarrhea, confusion, or abdominal pain. If you experience any of these symptoms, it is important
    to seek medical attention immediately.

    `,

    answers: 8,
    upvotes: 102,
    answersList: [],
  },
  {
    id: 3,
    user: { name: "John Doe", image: "src/components/homePageComponents//assets/img/1.jpg" },
    question:"I'm often feeling tired and sluggish. What could be the cause, and what can I do to feel more energized?",
    content: `
    Fatigue is a common symptom with various potential causes. Here are some possibilities:

Lifestyle factors: Lack of sleep, poor diet, dehydration, stress, and inactivity can all contribute to fatigue.

Tips: Aim for 7-8 hours of quality sleep nightly. Eat a balanced diet rich in fruits, vegetables, and whole grains. Stay hydrated by drinking plenty of water throughout the day. Practice stress management techniques like yoga or meditation. Engage in regular physical activity.
Medical conditions: Certain medical conditions like anemia, thyroid disorders, sleep apnea, and chronic illnesses can cause fatigue.

Tips: If you suspect an underlying medical condition, consult a doctor for diagnosis and proper treatment.
Nutrient deficiencies: Deficiencies in iron, vitamin B12, and vitamin D can lead to fatigue.

Tips: Get a blood test to check for nutrient deficiencies. Consider incorporating foods rich in these vitamins and minerals into your diet. Your doctor might also recommend supplements.
    `,
    answers: 12,
    upvotes: 103,
    answersList: [],
  },
  {
    id: 4,
    user: { name: "Robert Senju", image: "src/components/homePageComponents//assets/img/2.jpg" },
    question: "How can I improve my memory?",
    content: `
    Improving memory involves adopting good study habits, using memory techniques, and engaging in brain exercises. Here are some tips:
    1. Get enough sleep: Adequate sleep is crucial for memory consolidation and retention.
    2. Eat a healthy diet: A balanced diet rich in fruits, vegetables, and whole grains can support brain health and memory function.
    3. Stay physically active: Regular exercise has been shown to improve cognitive function and memory.
    4. Use memory techniques: Techniques like mnemonics, visualization, and spaced repetition can help you remember information more effectively.
    5. Engage in brain exercises: Games like crossword puzzles, Sudoku, and brain teasers can help keep your mind sharp and improve memory
    `,
    answers: 7,
    upvotes: 128,
    answersList: [],
  },
  {
    id: 5,
    user: { name: "Minato Namikaze", image: "src/components/homePageComponents//assets/img/9.jpg" },
    question: "What is the best way to deal with stress?",
    content: `
    Dealing with stress effectively requires a combination of strategies tailored to individual needs and circumstances. Here are some general tips:
    1. Identify the source of stress: Recognizing what triggers your stress can help you develop strategies to manage it.
    2. Practice relaxation techniques: Techniques like deep breathing, meditation, and progressive muscle relaxation can help reduce stress levels.
    3. Exercise regularly: Physical activity releases endorphins, which can improve mood and reduce stress.
    4. Connect with others: Social support from friends, family, or a support group can provide emotional comfort and help you cope with stress.
    5. Seek professional help: If stress becomes overwhelming, consider seeking assistance from a mental health professional.
    `,
    answers: 17,
    upvotes: 76,
    answersList: [],
  },
];

export default postData;
