const defaultWords = [
  { word: "aberration", definition: "a deviation from the normal or typical" },
  { word: "abject", definition: "extremely bad or severe; degrading" },
  { word: "abstruse", definition: "difficult to understand" },
  { word: "admonish", definition: "to warn or reprimand" },
  { word: "alacrity", definition: "eager readiness" },
  { word: "alleviate", definition: "to make less severe" },
  { word: "ambivalent", definition: "having mixed feelings" },
  { word: "amenable", definition: "willing to cooperate or be influenced" },
  { word: "analogous", definition: "comparable in certain respects" },
  { word: "anomalous", definition: "deviating from what is standard or normal" },
  { word: "antagonistic", definition: "actively opposing or hostile" },
  { word: "apathetic", definition: "showing little or no interest" },
  { word: "apocryphal", definition: "of doubtful authenticity" },
  { word: "arbitrary", definition: "based on random choice or personal whim" },
  { word: "arcane", definition: "understood by few" },
  { word: "arduous", definition: "involving great effort" },
  { word: "ascetic", definition: "practicing severe self-discipline" },
  { word: "assiduous", definition: "showing great care and perseverance" },
  { word: "austere", definition: "severe or strict in manner" },
  { word: "bellicose", definition: "willing to fight; aggressive" },
  { word: "benign", definition: "gentle; harmless" },
  { word: "bombastic", definition: "pompous; inflated" },
  { word: "candid", definition: "truthful and straightforward" },
  { word: "capricious", definition: "given to sudden changes of mood" },
  { word: "caustic", definition: "able to burn or corrode; sarcastic" },
  { word: "clandestine", definition: "kept secret or done secretly" },
  { word: "coalesce", definition: "to come together and form one mass" },
  { word: "cogent", definition: "clear and persuasive" },
  { word: "complacent", definition: "self-satisfied and unaware of dangers" },
  { word: "conciliatory", definition: "intended to appease" },
  { word: "condescending", definition: "displaying superiority; patronizing" },
  { word: "conjecture", definition: "an opinion formed without complete evidence" },
  { word: "consensus", definition: "general agreement" },
  { word: "corroborate", definition: "to confirm or give support to" },
  { word: "cryptic", definition: "having hidden meaning" },
  { word: "culpable", definition: "deserving blame" },
  { word: "cursory", definition: "hasty and not thorough" },
  { word: "dearth", definition: "a lack or scarcity" },
  { word: "debacle", definition: "a sudden, complete failure" },
  { word: "deleterious", definition: "causing harm or damage" },
  { word: "demure", definition: "modest and shy" },
  { word: "denounce", definition: "to publicly condemn" },
  { word: "deride", definition: "to mock or ridicule" },
  { word: "despot", definition: "a ruler with absolute power, often oppressive" },
  { word: "deter", definition: "to discourage from doing something" },
  { word: "detrimental", definition: "tending to cause harm" },
  { word: "didactic", definition: "intended to teach" },
  { word: "dilatory", definition: "slow to act; delaying" },
  { word: "discerning", definition: "having good judgement" },
  { word: "discrepancy", definition: "a lack of agreement or consistency" },
  { word: "disdain", definition: "the feeling that something is unworthy" },
  { word: "dispassionate", definition: "not influenced by emotion; impartial" },
  { word: "disseminate", definition: "to spread widely" },
  { word: "dogmatic", definition: "strongly asserting opinions as fact" },
  { word: "dormant", definition: "inactive, as though asleep" },
  { word: "duress", definition: "threats or pressure used to force someone" },
  { word: "eclectic", definition: "selecting from various sources" },
  { word: "egregious", definition: "outstandingly bad" },
  { word: "elicit", definition: "to draw out a response" },
  { word: "elucidate", definition: "to make clear; explain" },
  { word: "embolden", definition: "to give courage or confidence" },
  { word: "empirical", definition: "based on observation or experience" },
  { word: "enigma", definition: "something mysterious or puzzling" },
  { word: "ephemeral", definition: "lasting for a very short time" },
  { word: "equivocal", definition: "open to more than one interpretation" },
  { word: "erudite", definition: "having or showing great knowledge" },
  { word: "exacerbate", definition: "to make worse" },
  { word: "exculpate", definition: "to clear from blame" },
  { word: "exhaustive", definition: "thorough and complete" },
  { word: "exonerate", definition: "to absolve from blame" },
  { word: "explicit", definition: "stated clearly and in detail" },
  { word: "fastidious", definition: "very attentive to detail" },
  { word: "fervent", definition: "displaying passionate intensity" },
  { word: "flippant", definition: "not showing a serious attitude" },
  { word: "fortuitous", definition: "happening by chance, often lucky" },
  { word: "gratuitous", definition: "unnecessary or unwarranted" },
  { word: "gregarious", definition: "sociable; enjoying company" },
  { word: "guile", definition: "cunning or sly behavior" },
  { word: "hackneyed", definition: "overused and unoriginal" },
  { word: "haughty", definition: "arrogantly superior" },
  { word: "iconoclast", definition: "a person who attacks cherished beliefs" },
  { word: "idiosyncratic", definition: "peculiar or individual" },
  { word: "impartial", definition: "treating all rivals equally" },
  { word: "impervious", definition: "unable to be affected" },
  { word: "implacable", definition: "unable to be pacified" },
  { word: "impugn", definition: "to challenge as false" },
  { word: "inane", definition: "silly; lacking sense" },
  { word: "incisive", definition: "clear and sharply focused" },
  { word: "incongruous", definition: "not in harmony with surroundings" },
  { word: "incredulous", definition: "unwilling or unable to believe" },
  { word: "indolent", definition: "lazy; avoiding effort" },
  { word: "ineffable", definition: "too great for words" },
  { word: "infer", definition: "to deduce from evidence" },
  { word: "ingenuous", definition: "innocent and unsuspecting" },
  { word: "insidious", definition: "proceeding in a gradual, harmful way" },
  { word: "insipid", definition: "lacking flavor; dull" },
  { word: "intrepid", definition: "fearless; adventurous" },
  { word: "inundate", definition: "to overwhelm or flood" },
  { word: "irreverent", definition: "showing lack of respect for things generally taken seriously" },
  { word: "judicious", definition: "having good judgement; wise" }
];

function loadWords() {
  const userWords = JSON.parse(localStorage.getItem('userWords')) || [];
  return defaultWords.concat(userWords);
}

let words = loadWords();
let currentWord = null;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function nextQuestion() {
  if (words.length < 4) {
    document.getElementById('question').textContent = '単語が足りません';
    return;
  }
  document.getElementById('result').textContent = '';
  document.getElementById('next-btn').style.display = 'none';

  currentWord = words[Math.floor(Math.random() * words.length)];
  const options = [currentWord.definition];
  while (options.length < 4) {
    const def = words[Math.floor(Math.random() * words.length)].definition;
    if (!options.includes(def)) {
      options.push(def);
    }
  }
  shuffle(options);

  document.getElementById('question').textContent = `${currentWord.word} の意味は?`;
  const optDiv = document.getElementById('options');
  optDiv.innerHTML = '';
  options.forEach(def => {
    const btn = document.createElement('button');
    btn.textContent = def;
    btn.addEventListener('click', () => chooseAnswer(def));
    optDiv.appendChild(btn);
  });
}

function chooseAnswer(choice) {
  const result = document.getElementById('result');
  if (choice === currentWord.definition) {
    result.textContent = '正解！';
  } else {
    result.textContent = `不正解: 正しい答えは "${currentWord.definition}"`;
  }
  document.getElementById('next-btn').style.display = 'block';
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);

document.getElementById('add-btn').addEventListener('click', () => {
  const word = document.getElementById('new-word').value.trim();
  const def = document.getElementById('new-definition').value.trim();
  if (word && def) {
    const userWords = JSON.parse(localStorage.getItem('userWords')) || [];
    userWords.push({ word, definition: def });
    localStorage.setItem('userWords', JSON.stringify(userWords));
    words.push({ word, definition: def });
    document.getElementById('new-word').value = '';
    document.getElementById('new-definition').value = '';
    alert('単語を追加しました');
  }
});

nextQuestion();
