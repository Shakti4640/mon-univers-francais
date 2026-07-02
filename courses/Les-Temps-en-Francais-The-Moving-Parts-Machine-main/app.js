// ============================================================
// DATA: Verbs with conjugations across all tenses
// ============================================================

const VERBS = {
  manger: {
    inf: "manger", pp: "mangé", meaning: "to eat", objFr: "une pomme", objEn: "an apple",
    aux: "avoir",
    tenses: {
      present:       { je:"mange", tu:"manges", il:"mange", nous:"mangeons", vous:"mangez", ils:"mangent" },
      passeCompose:  { je:"ai mangé", tu:"as mangé", il:"a mangé", nous:"avons mangé", vous:"avez mangé", ils:"ont mangé" },
      imparfait:     { je:"mangeais", tu:"mangeais", il:"mangeait", nous:"mangions", vous:"mangiez", ils:"mangeaient" },
      plusQueParfait:{ je:"avais mangé", tu:"avais mangé", il:"avait mangé", nous:"avions mangé", vous:"aviez mangé", ils:"avaient mangé" },
      passeSimple:   { je:"mangeai", tu:"mangeas", il:"mangea", nous:"mangeâmes", vous:"mangeâtes", ils:"mangèrent" },
      passeAnterieur:{ je:"eus mangé", tu:"eus mangé", il:"eut mangé", nous:"eûmes mangé", vous:"eûtes mangé", ils:"eurent mangé" },
      futurProche:   { je:"vais manger", tu:"vas manger", il:"va manger", nous:"allons manger", vous:"allez manger", ils:"vont manger" },
      futurSimple:   { je:"mangerai", tu:"mangeras", il:"mangera", nous:"mangerons", vous:"mangerez", ils:"mangeront" },
      futurAnterieur:{ je:"aurai mangé", tu:"auras mangé", il:"aura mangé", nous:"aurons mangé", vous:"aurez mangé", ils:"auront mangé" },
      passeRecent:   { je:"viens de manger", tu:"viens de manger", il:"vient de manger", nous:"venons de manger", vous:"venez de manger", ils:"viennent de manger" },
      condPresent:   { je:"mangerais", tu:"mangerais", il:"mangerait", nous:"mangerions", vous:"mangeriez", ils:"mangeraient" },
      condPasse:     { je:"aurais mangé", tu:"aurais mangé", il:"aurait mangé", nous:"aurions mangé", vous:"auriez mangé", ils:"auraient mangé" },
      subjPresent:   { je:"mange", tu:"manges", il:"mange", nous:"mangions", vous:"mangiez", ils:"mangent" },
      subjPasse:     { je:"aie mangé", tu:"aies mangé", il:"ait mangé", nous:"ayons mangé", vous:"ayez mangé", ils:"aient mangé" },
      subjImparfait: { je:"mangeasse", tu:"mangeasses", il:"mangeât", nous:"mangeassions", vous:"mangeassiez", ils:"mangeassent" },
      subjPQP:       { je:"eusse mangé", tu:"eusses mangé", il:"eût mangé", nous:"eussions mangé", vous:"eussiez mangé", ils:"eussent mangé" },
      imperatif:     { tu:"mange", nous:"mangeons", vous:"mangez" },
      imperatifPasse:{ tu:"aie mangé", nous:"ayons mangé", vous:"ayez mangé" },
      partPresent:   { form:"mangeant" },
      partPasse:     { form:"mangé" },
      infinitifPasse:{ form:"avoir mangé" }
    }
  },
  aller: {
    inf: "aller", pp: "allé(e)", meaning: "to go", objFr: "au marché", objEn: "to the market",
    aux: "être",
    tenses: {
      present:       { je:"vais", tu:"vas", il:"va", nous:"allons", vous:"allez", ils:"vont" },
      passeCompose:  { je:"suis allé(e)", tu:"es allé(e)", il:"est allé", nous:"sommes allé(e)s", vous:"êtes allé(e)(s)", ils:"sont allés" },
      imparfait:     { je:"allais", tu:"allais", il:"allait", nous:"allions", vous:"alliez", ils:"allaient" },
      plusQueParfait:{ je:"étais allé(e)", tu:"étais allé(e)", il:"était allé", nous:"étions allé(e)s", vous:"étiez allé(e)(s)", ils:"étaient allés" },
      passeSimple:   { je:"allai", tu:"allas", il:"alla", nous:"allâmes", vous:"allâtes", ils:"allèrent" },
      passeAnterieur:{ je:"fus allé(e)", tu:"fus allé(e)", il:"fut allé", nous:"fûmes allé(e)s", vous:"fûtes allé(e)(s)", ils:"furent allés" },
      futurProche:   { je:"vais aller", tu:"vas aller", il:"va aller", nous:"allons aller", vous:"allez aller", ils:"vont aller" },
      futurSimple:   { je:"irai", tu:"iras", il:"ira", nous:"irons", vous:"irez", ils:"iront" },
      futurAnterieur:{ je:"serai allé(e)", tu:"seras allé(e)", il:"sera allé", nous:"serons allé(e)s", vous:"serez allé(e)(s)", ils:"seront allés" },
      passeRecent:   { je:"viens d'aller", tu:"viens d'aller", il:"vient d'aller", nous:"venons d'aller", vous:"venez d'aller", ils:"viennent d'aller" },
      condPresent:   { je:"irais", tu:"irais", il:"irait", nous:"irions", vous:"iriez", ils:"iraient" },
      condPasse:     { je:"serais allé(e)", tu:"serais allé(e)", il:"serait allé", nous:"serions allé(e)s", vous:"seriez allé(e)(s)", ils:"seraient allés" },
      subjPresent:   { je:"aille", tu:"ailles", il:"aille", nous:"allions", vous:"alliez", ils:"aillent" },
      subjPasse:     { je:"sois allé(e)", tu:"sois allé(e)", il:"soit allé", nous:"soyons allé(e)s", vous:"soyez allé(e)(s)", ils:"soient allés" },
      subjImparfait: { je:"allasse", tu:"allasses", il:"allât", nous:"allassions", vous:"allassiez", ils:"allassent" },
      subjPQP:       { je:"fusse allé(e)", tu:"fusses allé(e)", il:"fût allé", nous:"fussions allé(e)s", vous:"fussiez allé(e)(s)", ils:"fussent allés" },
      imperatif:     { tu:"va", nous:"allons", vous:"allez" },
      imperatifPasse:{ tu:"sois allé(e)", nous:"soyons allé(e)s", vous:"soyez allé(e)(s)" },
      partPresent:   { form:"allant" },
      partPasse:     { form:"allé(e)" },
      infinitifPasse:{ form:"être allé(e)" }
    }
  },
  finir: {
    inf: "finir", pp: "fini", meaning: "to finish", objFr: "le travail", objEn: "the work",
    aux: "avoir",
    tenses: {
      present:       { je:"finis", tu:"finis", il:"finit", nous:"finissons", vous:"finissez", ils:"finissent" },
      passeCompose:  { je:"ai fini", tu:"as fini", il:"a fini", nous:"avons fini", vous:"avez fini", ils:"ont fini" },
      imparfait:     { je:"finissais", tu:"finissais", il:"finissait", nous:"finissions", vous:"finissiez", ils:"finissaient" },
      plusQueParfait:{ je:"avais fini", tu:"avais fini", il:"avait fini", nous:"avions fini", vous:"aviez fini", ils:"avaient fini" },
      passeSimple:   { je:"finis", tu:"finis", il:"finit", nous:"finîmes", vous:"finîtes", ils:"finirent" },
      passeAnterieur:{ je:"eus fini", tu:"eus fini", il:"eut fini", nous:"eûmes fini", vous:"eûtes fini", ils:"eurent fini" },
      futurProche:   { je:"vais finir", tu:"vas finir", il:"va finir", nous:"allons finir", vous:"allez finir", ils:"vont finir" },
      futurSimple:   { je:"finirai", tu:"finiras", il:"finira", nous:"finirons", vous:"finirez", ils:"finiront" },
      futurAnterieur:{ je:"aurai fini", tu:"auras fini", il:"aura fini", nous:"aurons fini", vous:"aurez fini", ils:"auront fini" },
      passeRecent:   { je:"viens de finir", tu:"viens de finir", il:"vient de finir", nous:"venons de finir", vous:"venez de finir", ils:"viennent de finir" },
      condPresent:   { je:"finirais", tu:"finirais", il:"finirait", nous:"finirions", vous:"finiriez", ils:"finiraient" },
      condPasse:     { je:"aurais fini", tu:"aurais fini", il:"aurait fini", nous:"aurions fini", vous:"auriez fini", ils:"auraient fini" },
      subjPresent:   { je:"finisse", tu:"finisses", il:"finisse", nous:"finissions", vous:"finissiez", ils:"finissent" },
      subjPasse:     { je:"aie fini", tu:"aies fini", il:"ait fini", nous:"ayons fini", vous:"ayez fini", ils:"aient fini" },
      subjImparfait: { je:"finisse", tu:"finisses", il:"finît", nous:"finissions", vous:"finissiez", ils:"finissent" },
      subjPQP:       { je:"eusse fini", tu:"eusses fini", il:"eût fini", nous:"eussions fini", vous:"eussiez fini", ils:"eussent fini" },
      imperatif:     { tu:"finis", nous:"finissons", vous:"finissez" },
      imperatifPasse:{ tu:"aie fini", nous:"ayons fini", vous:"ayez fini" },
      partPresent:   { form:"finissant" },
      partPasse:     { form:"fini" },
      infinitifPasse:{ form:"avoir fini" }
    }
  },
  parler: {
    inf: "parler", pp: "parlé", meaning: "to speak", objFr: "français", objEn: "French",
    aux: "avoir",
    tenses: {
      present:       { je:"parle", tu:"parles", il:"parle", nous:"parlons", vous:"parlez", ils:"parlent" },
      passeCompose:  { je:"ai parlé", tu:"as parlé", il:"a parlé", nous:"avons parlé", vous:"avez parlé", ils:"ont parlé" },
      imparfait:     { je:"parlais", tu:"parlais", il:"parlait", nous:"parlions", vous:"parliez", ils:"parlaient" },
      plusQueParfait:{ je:"avais parlé", tu:"avais parlé", il:"avait parlé", nous:"avions parlé", vous:"aviez parlé", ils:"avaient parlé" },
      passeSimple:   { je:"parlai", tu:"parlas", il:"parla", nous:"parlâmes", vous:"parlâtes", ils:"parlèrent" },
      passeAnterieur:{ je:"eus parlé", tu:"eus parlé", il:"eut parlé", nous:"eûmes parlé", vous:"eûtes parlé", ils:"eurent parlé" },
      futurProche:   { je:"vais parler", tu:"vas parler", il:"va parler", nous:"allons parler", vous:"allez parler", ils:"vont parler" },
      futurSimple:   { je:"parlerai", tu:"parleras", il:"parlera", nous:"parlerons", vous:"parlerez", ils:"parleront" },
      futurAnterieur:{ je:"aurai parlé", tu:"auras parlé", il:"aura parlé", nous:"aurons parlé", vous:"aurez parlé", ils:"auront parlé" },
      passeRecent:   { je:"viens de parler", tu:"viens de parler", il:"vient de parler", nous:"venons de parler", vous:"venez de parler", ils:"viennent de parler" },
      condPresent:   { je:"parlerais", tu:"parlerais", il:"parlerait", nous:"parlerions", vous:"parleriez", ils:"parleraient" },
      condPasse:     { je:"aurais parlé", tu:"aurais parlé", il:"aurait parlé", nous:"aurions parlé", vous:"auriez parlé", ils:"auraient parlé" },
      subjPresent:   { je:"parle", tu:"parles", il:"parle", nous:"parlions", vous:"parliez", ils:"parlent" },
      subjPasse:     { je:"aie parlé", tu:"aies parlé", il:"ait parlé", nous:"ayons parlé", vous:"ayez parlé", ils:"aient parlé" },
      subjImparfait: { je:"parlasse", tu:"parlasses", il:"parlât", nous:"parlassions", vous:"parlassiez", ils:"parlassent" },
      subjPQP:       { je:"eusse parlé", tu:"eusses parlé", il:"eût parlé", nous:"eussions parlé", vous:"eussiez parlé", ils:"eussent parlé" },
      imperatif:     { tu:"parle", nous:"parlons", vous:"parlez" },
      imperatifPasse:{ tu:"aie parlé", nous:"ayons parlé", vous:"ayez parlé" },
      partPresent:   { form:"parlant" },
      partPasse:     { form:"parlé" },
      infinitifPasse:{ form:"avoir parlé" }
    }
  },
  venir: {
    inf: "venir", pp: "venu(e)", meaning: "to come", objFr: "ici", objEn: "here",
    aux: "être",
    tenses: {
      present:       { je:"viens", tu:"viens", il:"vient", nous:"venons", vous:"venez", ils:"viennent" },
      passeCompose:  { je:"suis venu(e)", tu:"es venu(e)", il:"est venu", nous:"sommes venu(e)s", vous:"êtes venu(e)(s)", ils:"sont venus" },
      imparfait:     { je:"venais", tu:"venais", il:"venait", nous:"venions", vous:"veniez", ils:"venaient" },
      plusQueParfait:{ je:"étais venu(e)", tu:"étais venu(e)", il:"était venu", nous:"étions venu(e)s", vous:"étiez venu(e)(s)", ils:"étaient venus" },
      passeSimple:   { je:"vins", tu:"vins", il:"vint", nous:"vînmes", vous:"vîntes", ils:"vinrent" },
      passeAnterieur:{ je:"fus venu(e)", tu:"fus venu(e)", il:"fut venu", nous:"fûmes venu(e)s", vous:"fûtes venu(e)(s)", ils:"furent venus" },
      futurProche:   { je:"vais venir", tu:"vas venir", il:"va venir", nous:"allons venir", vous:"allez venir", ils:"vont venir" },
      futurSimple:   { je:"viendrai", tu:"viendras", il:"viendra", nous:"viendrons", vous:"viendrez", ils:"viendront" },
      futurAnterieur:{ je:"serai venu(e)", tu:"seras venu(e)", il:"sera venu", nous:"serons venu(e)s", vous:"serez venu(e)(s)", ils:"seront venus" },
      passeRecent:   { je:"viens de venir", tu:"viens de venir", il:"vient de venir", nous:"venons de venir", vous:"venez de venir", ils:"viennent de venir" },
      condPresent:   { je:"viendrais", tu:"viendrais", il:"viendrait", nous:"viendrions", vous:"viendriez", ils:"viendraient" },
      condPasse:     { je:"serais venu(e)", tu:"serais venu(e)", il:"serait venu", nous:"serions venu(e)s", vous:"seriez venu(e)(s)", ils:"seraient venus" },
      subjPresent:   { je:"vienne", tu:"viennes", il:"vienne", nous:"venions", vous:"veniez", ils:"viennent" },
      subjPasse:     { je:"sois venu(e)", tu:"sois venu(e)", il:"soit venu", nous:"soyons venu(e)s", vous:"soyez venu(e)(s)", ils:"soient venus" },
      subjImparfait: { je:"vinsse", tu:"vinsses", il:"vînt", nous:"vinssions", vous:"vinssiez", ils:"vinssent" },
      subjPQP:       { je:"fusse venu(e)", tu:"fusses venu(e)", il:"fût venu", nous:"fussions venu(e)s", vous:"fussiez venu(e)(s)", ils:"fussent venus" },
      imperatif:     { tu:"viens", nous:"venons", vous:"venez" },
      imperatifPasse:{ tu:"sois venu(e)", nous:"soyons venu(e)s", vous:"soyez venu(e)(s)" },
      partPresent:   { form:"venant" },
      partPasse:     { form:"venu(e)" },
      infinitifPasse:{ form:"être venu(e)" }
    }
  }
};


// ============================================================
// TENSE METADATA
// ============================================================
const TENSES = {
  present: {
    id: "present",
    name: "Le Présent de l'Indicatif",
    nameShort: "Présent",
    english: "Present Tense",
    englishEx: (v) => v === "manger" ? "I eat / I am eating" : v === "aller" ? "I go / I am going" : v === "finir" ? "I finish" : v === "parler" ? "I speak" : "I come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="v">Verb (conjugated)</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "present",
    isSimple: true,
    category: "Indicatif"
  },
  passeCompose: {
    id: "passeCompose",
    name: "Le Passé Composé",
    nameShort: "Passé Composé",
    english: "Compound Past / Present Perfect",
    englishEx: (v) => v === "manger" ? "I ate / I have eaten" : v === "aller" ? "I went / I have gone" : v === "finir" ? "I finished" : v === "parler" ? "I spoke" : "I came",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Présent)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "past",
    isSimple: false,
    madeFrom: ["present", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in PRÉSENT + Past Participle",
    category: "Indicatif"
  },
  imparfait: {
    id: "imparfait",
    name: "L'Imparfait",
    nameShort: "Imparfait",
    english: "Imperfect / Past Continuous",
    englishEx: (v) => v === "manger" ? "I was eating / I used to eat" : v === "aller" ? "I was going / I used to go" : v === "finir" ? "I was finishing" : v === "parler" ? "I was speaking" : "I was coming",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="v">Verb (nous-stem + IMP endings)</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "past",
    isSimple: true,
    category: "Indicatif"
  },
  plusQueParfait: {
    id: "plusQueParfait",
    name: "Le Plus-que-parfait",
    nameShort: "Plus-que-parfait",
    english: "Pluperfect / Past Perfect",
    englishEx: (v) => v === "manger" ? "I had eaten" : v === "aller" ? "I had gone" : v === "finir" ? "I had finished" : v === "parler" ? "I had spoken" : "I had come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Imparfait)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "far-past",
    isSimple: false,
    madeFrom: ["imparfait", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in IMPARFAIT + Past Participle",
    category: "Indicatif"
  },
  passeSimple: {
    id: "passeSimple",
    name: "Le Passé Simple",
    nameShort: "Passé Simple",
    english: "Simple Past (Literary)",
    englishEx: (v) => v === "manger" ? "I ate (literary)" : v === "aller" ? "I went (literary)" : v === "finir" ? "I finished (literary)" : v === "parler" ? "I spoke (literary)" : "I came (literary)",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="v">Verb (special literary endings)</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "past",
    isSimple: true,
    category: "Indicatif"
  },
  passeAnterieur: {
    id: "passeAnterieur",
    name: "Le Passé Antérieur",
    nameShort: "Passé Antérieur",
    english: "Past Anterior (Literary)",
    englishEx: (v) => v === "manger" ? "I had eaten (literary)" : v === "aller" ? "I had gone (literary)" : v === "finir" ? "I had finished (literary)" : v === "parler" ? "I had spoken (literary)" : "I had come (literary)",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Passé Simple)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "far-past",
    isSimple: false,
    madeFrom: ["passeSimple", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in PASSÉ SIMPLE + Past Participle",
    category: "Indicatif"
  },
  futurProche: {
    id: "futurProche",
    name: "Le Futur Proche",
    nameShort: "Futur Proche",
    english: "Near / Immediate Future",
    englishEx: (v) => v === "manger" ? "I am going to eat" : v === "aller" ? "I am going to go" : v === "finir" ? "I am going to finish" : v === "parler" ? "I am going to speak" : "I am going to come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">aller (Présent)</span> <span class="op">+</span> <span class="v">Infinitive</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "near-future",
    isSimple: false,
    madeFrom: ["present_aller", "infinitif"],
    madeFromDesc: "ALLER in Présent + Infinitive of main verb",
    category: "Indicatif"
  },
  futurSimple: {
    id: "futurSimple",
    name: "Le Futur Simple",
    nameShort: "Futur Simple",
    english: "Simple Future",
    englishEx: (v) => v === "manger" ? "I will eat" : v === "aller" ? "I will go" : v === "finir" ? "I will finish" : v === "parler" ? "I will speak" : "I will come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="v">Infinitive + future endings</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "future",
    isSimple: true,
    category: "Indicatif"
  },
  futurAnterieur: {
    id: "futurAnterieur",
    name: "Le Futur Antérieur",
    nameShort: "Futur Antérieur",
    english: "Future Perfect",
    englishEx: (v) => v === "manger" ? "I will have eaten" : v === "aller" ? "I will have gone" : v === "finir" ? "I will have finished" : v === "parler" ? "I will have spoken" : "I will have come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Futur Simple)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "future",
    isSimple: false,
    madeFrom: ["futurSimple", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in FUTUR SIMPLE + Past Participle",
    category: "Indicatif"
  },
  passeRecent: {
    id: "passeRecent",
    name: "Le Passé Récent",
    nameShort: "Passé Récent",
    english: "Recent Past",
    englishEx: (v) => v === "manger" ? "I just ate" : v === "aller" ? "I just went" : v === "finir" ? "I just finished" : v === "parler" ? "I just spoke" : "I just came",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">venir de (Présent)</span> <span class="op">+</span> <span class="v">Infinitive</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "near-past",
    isSimple: false,
    madeFrom: ["present_venir", "infinitif"],
    madeFromDesc: "VENIR DE in Présent + Infinitive of main verb",
    category: "Indicatif"
  },
  condPresent: {
    id: "condPresent",
    name: "Le Conditionnel Présent",
    nameShort: "Conditionnel Présent",
    english: "Present Conditional",
    englishEx: (v) => v === "manger" ? "I would eat" : v === "aller" ? "I would go" : v === "finir" ? "I would finish" : v === "parler" ? "I would speak" : "I would come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="v">Infinitive + imparfait endings</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "conditional",
    isSimple: true,
    madeFrom: ["futurSimple_stem", "imparfait_endings"],
    madeFromDesc: "Futur Simple STEM + Imparfait ENDINGS = Conditionnel Présent",
    category: "Conditionnel"
  },
  condPasse: {
    id: "condPasse",
    name: "Le Conditionnel Passé",
    nameShort: "Conditionnel Passé",
    english: "Past Conditional",
    englishEx: (v) => v === "manger" ? "I would have eaten" : v === "aller" ? "I would have gone" : v === "finir" ? "I would have finished" : v === "parler" ? "I would have spoken" : "I would have come",
    formula: (aux) => `<span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Cond. Présent)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "conditional",
    isSimple: false,
    madeFrom: ["condPresent", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in CONDITIONNEL PRÉSENT + Past Participle",
    category: "Conditionnel"
  },
  subjPresent: {
    id: "subjPresent",
    name: "Le Subjonctif Présent",
    nameShort: "Subjonctif Présent",
    english: "Present Subjunctive",
    englishEx: (v) => v === "manger" ? "...that I eat" : v === "aller" ? "...that I go" : v === "finir" ? "...that I finish" : v === "parler" ? "...that I speak" : "...that I come",
    formula: (aux) => `<span class="op">que</span> <span class="s">Subject</span> <span class="op">+</span> <span class="v">Verb (ils-stem + subj. endings)</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "present",
    isSimple: true,
    category: "Subjonctif"
  },
  subjPasse: {
    id: "subjPasse",
    name: "Le Subjonctif Passé",
    nameShort: "Subjonctif Passé",
    english: "Past Subjunctive",
    englishEx: (v) => v === "manger" ? "...that I ate/have eaten" : v === "aller" ? "...that I went" : v === "finir" ? "...that I finished" : v === "parler" ? "...that I spoke" : "...that I came",
    formula: (aux) => `<span class="op">que</span> <span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Subj. Présent)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "past",
    isSimple: false,
    madeFrom: ["subjPresent", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in SUBJONCTIF PRÉSENT + Past Participle",
    category: "Subjonctif"
  },
  subjImparfait: {
    id: "subjImparfait",
    name: "Le Subjonctif Imparfait",
    nameShort: "Subjonctif Imparfait",
    english: "Imperfect Subjunctive (Literary)",
    englishEx: (v) => "...that I might " + (v === "manger" ? "eat" : v === "aller" ? "go" : v === "finir" ? "finish" : v === "parler" ? "speak" : "come") + " (literary)",
    formula: (aux) => `<span class="op">que</span> <span class="s">Subject</span> <span class="op">+</span> <span class="v">Passé Simple stem + subj. imp. endings</span>`,
    timeline: "past",
    isSimple: true,
    category: "Subjonctif"
  },
  subjPQP: {
    id: "subjPQP",
    name: "Le Subjonctif Plus-que-parfait",
    nameShort: "Subjonctif PQP",
    english: "Pluperfect Subjunctive (Literary)",
    englishEx: (v) => "...that I might have " + (v === "manger" ? "eaten" : v === "aller" ? "gone" : v === "finir" ? "finished" : v === "parler" ? "spoken" : "come") + " (literary)",
    formula: (aux) => `<span class="op">que</span> <span class="s">Subject</span> <span class="op">+</span> <span class="h">${aux} (Subj. Imparfait)</span> <span class="op">+</span> <span class="v">Past Participle</span>`,
    timeline: "far-past",
    isSimple: false,
    madeFrom: ["subjImparfait", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in SUBJONCTIF IMPARFAIT + Past Participle",
    category: "Subjonctif"
  },
  imperatif: {
    id: "imperatif",
    name: "L'Impératif Présent",
    nameShort: "Impératif Présent",
    english: "Present Imperative (Commands)",
    englishEx: (v) => v === "manger" ? "Eat!" : v === "aller" ? "Go!" : v === "finir" ? "Finish!" : v === "parler" ? "Speak!" : "Come!",
    formula: (aux) => `<span class="v">Verb (tu/nous/vous form, no subject)</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "present",
    isSimple: true,
    category: "Impératif"
  },
  imperatifPasse: {
    id: "imperatifPasse",
    name: "L'Impératif Passé",
    nameShort: "Impératif Passé",
    english: "Past Imperative (rare)",
    englishEx: (v) => "Have " + (v === "manger" ? "eaten" : v === "aller" ? "gone" : v === "finir" ? "finished" : v === "parler" ? "spoken" : "come") + "! (by deadline)",
    formula: (aux) => `<span class="h">${aux} (Impératif)</span> <span class="op">+</span> <span class="v">Past Participle</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "present",
    isSimple: false,
    madeFrom: ["imperatif", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in IMPÉRATIF + Past Participle",
    category: "Impératif"
  },
  partPresent: {
    id: "partPresent",
    name: "Le Participe Présent / Gérondif",
    nameShort: "Participe Présent",
    english: "Present Participle / Gerund",
    englishEx: (v) => v === "manger" ? "eating / while eating" : v === "aller" ? "going / while going" : v === "finir" ? "finishing" : v === "parler" ? "speaking" : "coming",
    formula: (aux) => `<span class="op">(en)</span> <span class="v">nous-stem + -ant</span> <span class="op">+</span> <span class="o">Object</span>`,
    timeline: "present",
    isSimple: true,
    category: "Participe"
  },
  partPasse: {
    id: "partPasse",
    name: "Le Participe Passé",
    nameShort: "Participe Passé",
    english: "Past Participle",
    englishEx: (v) => v === "manger" ? "eaten" : v === "aller" ? "gone" : v === "finir" ? "finished" : v === "parler" ? "spoken" : "come",
    formula: (aux) => `<span class="v">Past Participle</span> <span class="op">(used in compound tenses, as adjective, passive)</span>`,
    timeline: "past",
    isSimple: true,
    category: "Participe"
  },
  infinitifPasse: {
    id: "infinitifPasse",
    name: "L'Infinitif Passé",
    nameShort: "Infinitif Passé",
    english: "Past Infinitive",
    englishEx: (v) => "after having " + (v === "manger" ? "eaten" : v === "aller" ? "gone" : v === "finir" ? "finished" : v === "parler" ? "spoken" : "come"),
    formula: (aux) => `<span class="op">après</span> <span class="h">${aux} (infinitif)</span> <span class="op">+</span> <span class="v">Past Participle</span>`,
    timeline: "past",
    isSimple: false,
    madeFrom: ["infinitif_aux", "partPasse"],
    madeFromDesc: "Auxiliary (avoir/être) in INFINITIVE + Past Participle",
    category: "Infinitif"
  }
};

// Timeline positions
const TIMELINE_POINTS = [
  { id: "far-past", label: "Further Past" },
  { id: "past", label: "Past" },
  { id: "near-past", label: "Recent Past" },
  { id: "present", label: "Present" },
  { id: "near-future", label: "Near Future" },
  { id: "future", label: "Future" },
  { id: "conditional", label: "Conditional" }
];

// Compound tense combinations
const COMBINATIONS = {
  passeCompose:   { a: "Présent (of aux)", b: "Participe Passé", result: "Passé Composé", desc: "Take the auxiliary (avoir/être) conjugated in the PRÉSENT, add the Past Participle → you get the Passé Composé." },
  plusQueParfait:  { a: "Imparfait (of aux)", b: "Participe Passé", result: "Plus-que-parfait", desc: "Take the auxiliary conjugated in the IMPARFAIT, add the Past Participle → you get the Plus-que-parfait. It's literally the Passé Composé with the helper shifted to Imparfait!" },
  passeAnterieur:  { a: "Passé Simple (of aux)", b: "Participe Passé", result: "Passé Antérieur", desc: "Take the auxiliary in PASSÉ SIMPLE + Past Participle → literary equivalent of Plus-que-parfait." },
  futurAnterieur:  { a: "Futur Simple (of aux)", b: "Participe Passé", result: "Futur Antérieur", desc: "Take the auxiliary in FUTUR SIMPLE + Past Participle → Future Perfect." },
  condPasse:       { a: "Conditionnel Présent (of aux)", b: "Participe Passé", result: "Conditionnel Passé", desc: "Take the auxiliary in CONDITIONNEL PRÉSENT + Past Participle → Past Conditional (would have done)." },
  subjPasse:       { a: "Subjonctif Présent (of aux)", b: "Participe Passé", result: "Subjonctif Passé", desc: "Take the auxiliary in SUBJONCTIF PRÉSENT + Past Participle → Past Subjunctive." },
  subjPQP:         { a: "Subjonctif Imparfait (of aux)", b: "Participe Passé", result: "Subjonctif PQP", desc: "Take the auxiliary in SUBJONCTIF IMPARFAIT + Past Participle → Pluperfect Subjunctive (literary)." },
  imperatifPasse:  { a: "Impératif (of aux)", b: "Participe Passé", result: "Impératif Passé", desc: "Take the auxiliary in IMPÉRATIF + Past Participle → Past Imperative (rare)." },
  futurProche:     { a: "Aller (Présent)", b: "Infinitive", result: "Futur Proche", desc: "Conjugate ALLER in Présent + Infinitive of main verb → Near Future (going to do)." },
  passeRecent:     { a: "Venir de (Présent)", b: "Infinitive", result: "Passé Récent", desc: "Conjugate VENIR DE in Présent + Infinitive of main verb → Recent Past (just did)." },
  condPresent:     { a: "Futur Simple stem", b: "Imparfait endings", result: "Conditionnel Présent", desc: "Take the FUTUR SIMPLE stem (infinitive or irregular) + IMPARFAIT endings (-ais, -ais, -ait, -ions, -iez, -aient) → Conditionnel Présent. Two tenses fused into one!" },
  infinitifPasse:  { a: "Auxiliary (infinitive)", b: "Participe Passé", result: "Infinitif Passé", desc: "Auxiliary in INFINITIVE form (avoir/être) + Past Participle → Past Infinitive (après avoir mangé)." }
};


// ============================================================
// STATE
// ============================================================
let currentVerb = "manger";
let currentTenseA = "present";
let currentTenseB = "passeCompose";

// ============================================================
// HELPERS
// ============================================================
function getVerbData() { return VERBS[currentVerb]; }

function getParts(tenseId) {
  const vd = getVerbData();
  const td = vd.tenses[tenseId];
  const meta = TENSES[tenseId];
  if (!td) return null;

  // For non-conjugatable forms
  if (td.form !== undefined) {
    return {
      subject: "—",
      helper: "—",
      verb: td.form,
      object: tenseId === "partPasse" || tenseId === "partPresent" ? vd.objFr : "",
      subjectSub: "",
      helperSub: "none",
      verbSub: tenseId === "partPresent" ? "present participle" : "past participle",
      objectSub: ""
    };
  }

  // For imperative (no subject)
  if (tenseId === "imperatif" || tenseId === "imperatifPasse") {
    const form = td.tu || "";
    const parts = form.split(" ");
    if (parts.length > 1) {
      return {
        subject: "—",
        helper: parts[0],
        verb: parts.slice(1).join(" "),
        object: vd.objFr,
        subjectSub: "no subject",
        helperSub: "auxiliary",
        verbSub: "past participle",
        objectSub: ""
      };
    }
    return {
      subject: "—",
      helper: "—",
      verb: form,
      object: vd.objFr,
      subjectSub: "no subject",
      helperSub: "none",
      verbSub: "conjugated verb",
      objectSub: ""
    };
  }

  // Regular conjugated tenses
  const jeForm = td.je;
  const words = jeForm.split(" ");

  if (words.length === 1) {
    // Simple tense: no helper
    return {
      subject: "Je",
      helper: "—",
      verb: words[0],
      object: vd.objFr,
      subjectSub: "subject",
      helperSub: "none",
      verbSub: "conjugated verb",
      objectSub: ""
    };
  } else if (words.length === 2) {
    // Compound: helper + verb/pp
    return {
      subject: "Je" + (words[0] === "suis" || words[0] === "étais" || words[0] === "fus" || words[0] === "serai" || words[0] === "serais" || words[0] === "sois" || words[0] === "fusse" ? "" : ""),
      helper: words[0],
      verb: words[1],
      object: vd.objFr,
      subjectSub: "subject",
      helperSub: getHelperLabel(tenseId),
      verbSub: getVerbLabel(tenseId),
      objectSub: ""
    };
  } else if (words.length === 3) {
    // e.g. "viens de manger" or "vais manger"
    return {
      subject: "Je",
      helper: words[0] + " " + words[1],
      verb: words[2],
      object: vd.objFr,
      subjectSub: "subject",
      helperSub: getHelperLabel(tenseId),
      verbSub: getVerbLabel(tenseId),
      objectSub: ""
    };
  }

  // Fallback
  return {
    subject: "Je",
    helper: words.slice(0, -1).join(" "),
    verb: words[words.length - 1],
    object: vd.objFr,
    subjectSub: "subject",
    helperSub: "helper",
    verbSub: "verb",
    objectSub: ""
  };
}

function getHelperLabel(tenseId) {
  const map = {
    passeCompose: "avoir/être (présent)",
    plusQueParfait: "avoir/être (imparfait)",
    passeAnterieur: "avoir/être (passé simple)",
    futurAnterieur: "avoir/être (futur simple)",
    condPasse: "avoir/être (cond. présent)",
    subjPasse: "avoir/être (subj. présent)",
    subjPQP: "avoir/être (subj. imparfait)",
    imperatifPasse: "avoir/être (impératif)",
    futurProche: "aller (présent)",
    passeRecent: "venir de (présent)",
    infinitifPasse: "avoir/être (infinitif)"
  };
  return map[tenseId] || "helper verb";
}

function getVerbLabel(tenseId) {
  const compound = ["passeCompose","plusQueParfait","passeAnterieur","futurAnterieur","condPasse","subjPasse","subjPQP","imperatifPasse","infinitifPasse"];
  if (compound.includes(tenseId)) return "past participle";
  if (tenseId === "futurProche" || tenseId === "passeRecent") return "infinitive";
  return "conjugated verb";
}

function getEnglishSentence(tenseId, verb) {
  const vd = VERBS[verb];
  const meta = TENSES[tenseId];
  const ex = meta.englishEx(verb);
  return ex + " " + vd.objEn;
}

function getFrenchSentence(tenseId, verb) {
  const vd = VERBS[verb];
  const td = vd.tenses[tenseId];
  if (!td) return "";
  if (td.form !== undefined) {
    if (tenseId === "partPresent") return "(en) " + td.form + " " + vd.objFr;
    if (tenseId === "partPasse") return td.form;
    if (tenseId === "infinitifPasse") return "après " + td.form;
    return td.form;
  }
  if (tenseId === "imperatif" || tenseId === "imperatifPasse") {
    return (td.tu || "") + " " + vd.objFr + " !";
  }
  const prefix = (tenseId.startsWith("subj")) ? "que " : "";
  const jeForm = td.je || "";
  const elided = jeForm.startsWith("a") || jeForm.startsWith("e") || jeForm.startsWith("é") || jeForm.startsWith("i") || jeForm.startsWith("o") || jeForm.startsWith("u");
  const subject = elided ? "J'" : "Je ";
  return prefix + subject + jeForm + " " + vd.objFr;
}

// ============================================================
// RENDER FUNCTIONS
// ============================================================
function renderParts(containerId, parts, changedFields) {
  const c = document.getElementById(containerId);
  const fields = [
    { cls: "subject", label: "Subject", val: parts.subject, sub: parts.subjectSub },
    { cls: "helper", label: "Helping Verb", val: parts.helper, sub: parts.helperSub },
    { cls: "verb", label: "Verb / PP", val: parts.verb, sub: parts.verbSub },
    { cls: "object", label: "Object", val: parts.object, sub: parts.objectSub }
  ];
  c.innerHTML = fields.map(f => {
    const isEmpty = f.val === "—" || f.val === "";
    const isChanged = changedFields && changedFields.includes(f.cls);
    return `<div class="part ${f.cls} ${isEmpty ? 'empty' : ''} ${isChanged ? 'changed' : ''}">
      <div class="part-label">${f.label}</div>
      <div class="part-value">${f.val || '—'}</div>
      ${f.sub ? `<div class="part-sub">${f.sub}</div>` : ''}
    </div>`;
  }).join('');
}

function getPunjabiSentence(tenseId, verb) {
  if (TRANSLATIONS[tenseId] && TRANSLATIONS[tenseId][verb]) {
    return TRANSLATIONS[tenseId][verb].pa || "";
  }
  return "";
}

function getHindiSentence(tenseId, verb) {
  if (TRANSLATIONS[tenseId] && TRANSLATIONS[tenseId][verb]) {
    return TRANSLATIONS[tenseId][verb].hi || "";
  }
  return "";
}

function renderMachine(suffix, tenseId) {
  const meta = TENSES[tenseId];
  const vd = getVerbData();
  document.getElementById('name' + suffix).textContent = meta.name;
  document.getElementById('eng' + suffix).textContent = meta.english;
  document.getElementById('sentFr' + suffix).textContent = getFrenchSentence(tenseId, currentVerb);
  document.getElementById('sentEn' + suffix).textContent = getEnglishSentence(tenseId, currentVerb);
  document.getElementById('sentPa' + suffix).textContent = getPunjabiSentence(tenseId, currentVerb);
  document.getElementById('sentHi' + suffix).textContent = getHindiSentence(tenseId, currentVerb);
}

function getChangedFields(partsA, partsB) {
  const changed = [];
  if (partsA.helper !== partsB.helper) changed.push("helper");
  if (partsA.verb !== partsB.verb) changed.push("verb");
  // subject and object are fixed
  return changed;
}

function renderChangeList(partsA, partsB) {
  const list = document.getElementById('changeList');
  const items = [];
  if (partsA.subject !== partsB.subject) {
    items.push(`Subject: "${partsA.subject}" → "${partsB.subject}" <span class="tag-changed">changed</span>`);
  } else {
    items.push(`Subject: "${partsA.subject}" <span class="tag-fixed">fixed</span>`);
  }
  if (partsA.helper !== partsB.helper) {
    items.push(`Helping Verb: "${partsA.helper}" → "${partsB.helper}" <span class="tag-changed">changed ✨</span>`);
  } else {
    items.push(`Helping Verb: "${partsA.helper}" <span class="tag-fixed">same</span>`);
  }
  if (partsA.verb !== partsB.verb) {
    items.push(`Verb/PP: "${partsA.verb}" → "${partsB.verb}" <span class="tag-changed">changed ✨</span>`);
  } else {
    items.push(`Verb/PP: "${partsA.verb}" <span class="tag-fixed">same</span>`);
  }
  if (partsA.object !== partsB.object) {
    items.push(`Object: "${partsA.object}" → "${partsB.object}" <span class="tag-changed">changed</span>`);
  } else {
    items.push(`Object: "${partsA.object}" <span class="tag-fixed">fixed</span>`);
  }
  list.innerHTML = items.map(i => `<li>${i}</li>`).join('');
}

function renderFormulas() {
  const vd = getVerbData();
  const aux = vd.aux === "avoir" ? "avoir" : "être";
  const metaA = TENSES[currentTenseA];
  const metaB = TENSES[currentTenseB];
  document.getElementById('formulaA').innerHTML = `<strong style="color:var(--accent)">${metaA.nameShort}:</strong> ${metaA.formula(aux)}`;
  document.getElementById('formulaB').innerHTML = `<strong style="color:var(--accent)">${metaB.nameShort}:</strong> ${metaB.formula(aux)}`;
}

function renderCombination() {
  const eq = document.getElementById('comboEquation');
  const desc = document.getElementById('comboDesc');

  // Show combination for tense B if it's compound, else tense A
  let comboKey = COMBINATIONS[currentTenseB] ? currentTenseB : (COMBINATIONS[currentTenseA] ? currentTenseA : null);

  if (!comboKey) {
    // Show the general compound tense pattern
    eq.innerHTML = `<span class="combo-pill">Simple Tense (of auxiliary)</span>
      <span class="combo-op">+</span>
      <span class="combo-pill">Past Participle</span>
      <span class="combo-op">=</span>
      <span class="combo-pill result">Compound Tense</span>`;
    desc.innerHTML = `Every compound tense in French follows this pattern: conjugate the auxiliary (avoir/être) in a simple tense, then add the past participle. The tense of the auxiliary determines which compound tense you get!<br><br>
    <strong>The Master Rule:</strong> Présent → Passé Composé · Imparfait → Plus-que-parfait · Futur Simple → Futur Antérieur · Cond. Présent → Cond. Passé · Subj. Présent → Subj. Passé`;
    return;
  }

  const combo = COMBINATIONS[comboKey];
  eq.innerHTML = `<span class="combo-pill">${combo.a}</span>
    <span class="combo-op">+</span>
    <span class="combo-pill">${combo.b}</span>
    <span class="combo-op">=</span>
    <span class="combo-pill result">${combo.result}</span>`;
  desc.textContent = combo.desc;
}

function renderConjugation() {
  const vd = getVerbData();
  const td = vd.tenses[currentTenseA];
  const meta = TENSES[currentTenseA];
  document.getElementById('conjTitle').textContent = `Full Conjugation — ${meta.nameShort} (${vd.inf})`;
  const body = document.getElementById('conjBody');

  if (td.form !== undefined) {
    body.innerHTML = `<tr><td>—</td><td>—</td><td>${td.form}</td><td>${meta.englishEx(currentVerb)}</td></tr>`;
    return;
  }

  const subjects = ["je","tu","il","nous","vous","ils"];
  const subjectLabels = { je:"Je", tu:"Tu", il:"Il/Elle/On", nous:"Nous", vous:"Vous", ils:"Ils/Elles" };
  const engSubjects = { je:"I", tu:"You", il:"He/She", nous:"We", vous:"You (formal)", ils:"They" };

  let rows = "";
  for (const s of subjects) {
    if (!td[s]) continue;
    const form = td[s];
    const words = form.split(" ");
    let helper = "—", verb = form;
    if (words.length > 1) {
      if (words.length === 2) { helper = words[0]; verb = words[1]; }
      else if (words.length === 3) { helper = words[0] + " " + words[1]; verb = words[2]; }
    } else {
      helper = "—";
      verb = words[0];
    }
    rows += `<tr><td>${subjectLabels[s]}</td><td>${helper}</td><td>${verb}</td><td>${engSubjects[s]}...</td></tr>`;
  }
  body.innerHTML = rows;
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  const metaA = TENSES[currentTenseA];
  const metaB = TENSES[currentTenseB];
  container.innerHTML = TIMELINE_POINTS.map(p => {
    const isA = metaA.timeline === p.id;
    const isB = metaB.timeline === p.id;
    let dotClass = "";
    let labelClass = "";
    if (isA && isB) { dotClass = "active"; labelClass = "active"; }
    else if (isA) { dotClass = "active"; labelClass = "active"; }
    else if (isB) { dotClass = "activeB"; labelClass = "activeB"; }
    return `<div class="tl-point">
      <div class="tl-dot ${dotClass}"></div>
      <div class="tl-label ${labelClass}">${p.label}${isA ? '<br>▲ A' : ''}${isB ? '<br>▲ B' : ''}</div>
    </div>`;
  }).join('');
}

function renderVerbSelector() {
  const container = document.getElementById('verbSelector');
  const verbNames = { manger: "manger (eat)", aller: "aller (go)", finir: "finir (finish)", parler: "parler (speak)", venir: "venir (come)" };
  container.innerHTML = Object.keys(VERBS).map(v =>
    `<button class="verb-btn ${v === currentVerb ? 'active' : ''}" data-verb="${v}">${verbNames[v]}</button>`
  ).join('');
  container.querySelectorAll('.verb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentVerb = btn.dataset.verb;
      renderAll();
    });
  });
}

function populateSelects() {
  const selA = document.getElementById('tenseA');
  const selB = document.getElementById('tenseB');
  let categories = {};
  for (const [id, meta] of Object.entries(TENSES)) {
    if (!categories[meta.category]) categories[meta.category] = [];
    categories[meta.category].push({ id, name: meta.nameShort + " — " + meta.english });
  }
  let html = "";
  for (const [cat, items] of Object.entries(categories)) {
    html += `<optgroup label="${cat}">`;
    for (const item of items) {
      html += `<option value="${item.id}">${item.name}</option>`;
    }
    html += `</optgroup>`;
  }
  selA.innerHTML = html;
  selB.innerHTML = html;
  selA.value = currentTenseA;
  selB.value = currentTenseB;
  selA.addEventListener('change', () => { currentTenseA = selA.value; renderAll(); });
  selB.addEventListener('change', () => { currentTenseB = selB.value; renderAll(); });
}

function renderAll() {
  const partsA = getParts(currentTenseA);
  const partsB = getParts(currentTenseB);
  const changed = getChangedFields(partsA, partsB);

  renderMachine('A', currentTenseA);
  renderMachine('B', currentTenseB);
  renderParts('partsA', partsA, []);
  renderParts('partsB', partsB, changed);
  renderChangeList(partsA, partsB);
  renderFormulas();
  renderCombination();
  renderConjugation();
  renderTimeline();
  renderVerbSelector();

  // Update arrow label
  if (changed.length === 0) {
    document.getElementById('arrowLabel').textContent = "Same structure!";
  } else {
    document.getElementById('arrowLabel').textContent = changed.map(c => c === "helper" ? "Helping Verb changed" : "Verb/PP changed").join(" + ");
  }
}

// ============================================================
// INIT
// ============================================================
populateSelects();
renderAll();
