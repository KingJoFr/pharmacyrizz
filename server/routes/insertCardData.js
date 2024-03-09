const Card = require('../models/Card');
const express = require('express');
const router = express.Router();


function insertCardData(){
    Card.insertMany([
        
            {
                "generic": "Levothyroxine",
                "brand": "Synthroid",
                "use": "Hormone replacement",
                "dea_class": "-",
                "form":"pill",
                "action":"take",
                "route":"by mouth"
            },
            {
                "generic": "Hydrocodone/APAP",
                "brand": "Vicodin",
                "use": "Analgesic",
                "dea_class": "C-II"
            },
            {
                "generic": "Amoxicillin",
                "brand": "Amoxil",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Lisinopril",
                "brand": "Prinivil",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Esomeprazole",
                "brand": "Nexium",
                "use": "Antacid (PPI)",
                "dea_class": "-"
            },
            {
                "generic": "Atorvastatin",
                "brand": "Lipitor",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Simvastatin",
                "brand": "Zocor",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Clopidogrel",
                "brand": "Plavix",
                "use": "Anticoagulant",
                "dea_class": "-"
            },
            {
                "generic": "Montelukast",
                "brand": "Singulair",
                "use": "Anti-asthmatic",
                "dea_class": "-"
            },
            {
                "generic": "Rosuvastatin",
                "brand": "Crestor",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Metoprolol",
                "brand": "Lopressor",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Escitalopram",
                "brand": "Lexapro",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Azithromycin",
                "brand": "Zithromax",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Albuterol",
                "brand": "ProAir HFA",
                "use": "Anti-asthmatic",
                "dea_class": "-"
            },
            {
                "generic": "Hydrochlorothiazide",
                "brand": "HCTZ",
                "use": "Diuretic",
                "dea_class": "-"
            },
            {
                "generic": "Metformin",
                "brand": "Glucophage",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Sertraline",
                "brand": "Zoloft",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Ibuprofen",
                "brand": "Advil",
                "use": "Analgesic (NSAID)",
                "dea_class": "-"
            },
            {
                "generic": "Zolpidem",
                "brand": "Ambien",
                "use": "Sleep aid",
                "dea_class": "C-IV"
            },
            {
                "generic": "Furosemide",
                "brand": "Lasix",
                "use": "Diuretic",
                "dea_class": "-"
            },
            {
                "generic": "Omeprazole",
                "brand": "Prilosec",
                "use": "Antacid (PPI)",
                "dea_class": "-"
            },
            {
                "generic": "Trazodone",
                "brand": "Desyrel",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Valsartan",
                "brand": "Diovan",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Tramadol",
                "brand": "Ultram",
                "use": "Analgesic",
                "dea_class": "C-IV"
            },
            {
                "generic": "Duloxetine",
                "brand": "Cymbalta",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Warfarin",
                "brand": "Coumadin",
                "use": "Anticoagulant",
                "dea_class": "-"
            },
            {
                "generic": "Amlodipine",
                "brand": "Norvasc",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Oxycodone/APAP",
                "brand": "Percocet",
                "use": "Analgesic",
                "dea_class": "C-II"
            },
            {
                "generic": "Quetiapine",
                "brand": "Seroquel",
                "use": "Antipsychotic",
                "dea_class": "-"
            },
            {
                "generic": "Promethazine",
                "brand": "Phenergan",
                "use": "Antihistamine",
                "dea_class": "-"
            },
            {
                "generic": "Fluticasone",
                "brand": "Flonase",
                "use": "Antihistamine",
                "dea_class": "-"
            },
            {
                "generic": "Alprazolam",
                "brand": "Xanax",
                "use": "Antianxiety",
                "dea_class": "C-IV"
            },
            {
                "generic": "Clonazepam",
                "brand": "Klonopin",
                "use": "Antianxiety",
                "dea_class": "C-IV"
            },
            {
                "generic": "Benazepril",
                "brand": "Lotensin",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Meloxicam",
                "brand": "Mobic",
                "use": "Analgesic (NSAID)",
                "dea_class": "-"
            },
            {
                "generic": "Citalopram",
                "brand": "Celexa",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Cephalexin",
                "brand": "Keflex",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Tiotropium",
                "brand": "Spiriva",
                "use": "C.O.P.D.",
                "dea_class": "-"
            },
            {
                "generic": "Gabapentin",
                "brand": "Neurontin",
                "use": "Anticonvulsant",
                "dea_class": "-"
            },
            {
                "generic": "Aripiprazole",
                "brand": "Abilify",
                "use": "Antipsychotic",
                "dea_class": "-"
            },
            {
                "generic": "Potassium",
                "brand": "K-Tab",
                "use": "Electrolyte",
                "dea_class": "-"
            },
            {
                "generic": "Cyclobenzaprine",
                "brand": "Flexeril",
                "use": "Muscle Relaxer",
                "dea_class": "-"
            },
            {
                "generic": "Methylprednisolone",
                "brand": "Medrol",
                "use": "Anti-inflammatory steriod",
                "dea_class": "-"
            },
            {
                "generic": "Methylphenidate",
                "brand": "Concerta",
                "use": "ADHD",
                "dea_class": "C-II"
            },
            {
                "generic": "Fexofenadine",
                "brand": "Allegra",
                "use": "Antihistamine",
                "dea_class": "-"
            },
            {
                "generic": "Carvedilol",
                "brand": "Coreg",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Carisoprodol",
                "brand": "Soma",
                "use": "Muscle Relaxer",
                "dea_class": "C-IV"
            },
            {
                "generic": "Digoxin",
                "brand": "Lanoxin",
                "use": "Congestive Heart Failure",
                "dea_class": "-"
            },
            {
                "generic": "Memantine",
                "brand": "Namenda",
                "use": "Antidementia",
                "dea_class": "-"
            },
            {
                "generic": "Atenolol",
                "brand": "Tenormin",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Diazepam",
                "brand": "Valium",
                "use": "Antianxiety",
                "dea_class": "C-IV"
            },
            {
                "generic": "Oxycodone",
                "brand": "OxyContin",
                "use": "Analgesic",
                "dea_class": "C-II"
            },
            {
                "generic": "Risedronate",
                "brand": "Actonel",
                "use": "Osteoporosis",
                "dea_class": "-"
            },
            {
                "generic": "Folic Acid",
                "brand": "Folvite",
                "use": "Supplement",
                "dea_class": "-"
            },
            {
                "generic": "Olmesartan",
                "brand": "Benicar",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Prednisone",
                "brand": "Deltasone",
                "use": "Anti-inflammatory steriod",
                "dea_class": "-"
            },
            {
                "generic": "Doxycycline",
                "brand": "Vibramycin",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Alendronate",
                "brand": "Fosamax",
                "use": "Osteoporosis",
                "dea_class": "-"
            },
            {
                "generic": "Pantoprazole",
                "brand": "Protonix",
                "use": "Antacid (PPI)",
                "dea_class": "-"
            },
            {
                "generic": "Tamsulosin",
                "brand": "Flomax",
                "use": "Urinary retention",
                "dea_class": "-"
            },
            {
                "generic": "Triamterene/HCTZ",
                "brand": "Dyazide",
                "use": "Diuretic",
                "dea_class": "-"
            },
            {
                "generic": "Paroxetine",
                "brand": "Paxil",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Buprenorphine / Naloxone",
                "brand": "Suboxone",
                "use": "Opioid Addiction",
                "dea_class": "C-III"
            },
            {
                "generic": "Enalapril",
                "brand": "Vasotec",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Lovastatin",
                "brand": "Mevacor",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Pioglitazone",
                "brand": "Actos",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Pravastatin",
                "brand": "Pravachol",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Fluoxetine",
                "brand": "Prozac",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Insulin Detemir",
                "brand": "Levemir",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Fluconazole",
                "brand": "Diflucan",
                "use": "Antifungal",
                "dea_class": "-"
            },
            {
                "generic": "Levofloxacin",
                "brand": "Levaquin",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Rivaroxaban",
                "brand": "Xarelto",
                "use": "Anticoagulant",
                "dea_class": "-"
            },
            {
                "generic": "Celecoxib",
                "brand": "Celebrex",
                "use": "Analgesic (NSAID)",
                "dea_class": "-"
            },
            {
                "generic": "Codeine / APAP",
                "brand": "Tylenol #3",
                "use": "Analgesic",
                "dea_class": "C-III"
            },
            {
                "generic": "Mometasone",
                "brand": "Nasonex",
                "use": "Antihistamine",
                "dea_class": "-"
            },
            {
                "generic": "Ciprofloxacin",
                "brand": "Cipro",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Pregabalin",
                "brand": "Lyrica",
                "use": "Anticonvulsant",
                "dea_class": "-"
            },
            {
                "generic": "Insulin Aspart",
                "brand": "Novolog",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Venlafaxine",
                "brand": "Effexor",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Lorazepam",
                "brand": "Ativan",
                "use": "Antianxiety",
                "dea_class": "C-IV"
            },
            {
                "generic": "Ezetimibe",
                "brand": "Zetia",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Estrogen",
                "brand": "Premarin",
                "use": "Hormone replacement",
                "dea_class": "-"
            },
            {
                "generic": "Allopurinol",
                "brand": "Zyloprim",
                "use": "Antigout",
                "dea_class": "-"
            },
            {
                "generic": "Penicillin",
                "brand": "Pen VK",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Sitagliptin",
                "brand": "Januvia",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Amitriptyline",
                "brand": "Elavil",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Clonidine",
                "brand": "Catapres",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Latanoprost",
                "brand": "Xalatan",
                "use": "Antiglaucoma",
                "dea_class": "-"
            },
            {
                "generic": "Lisdexamfetamine",
                "brand": "Vyvanse",
                "use": "ADHD",
                "dea_class": "C-II"
            },
            {
                "generic": "Niacin",
                "brand": "Niaspan",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Naproxen",
                "brand": "Aleve",
                "use": "Analgesic (NSAID)",
                "dea_class": "-"
            },
            {
                "generic": "Dexlansoprazole",
                "brand": "Dexilant",
                "use": "Antacid (PPI)",
                "dea_class": "-"
            },
            {
                "generic": "Glyburide",
                "brand": "Diabeta",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Olanzapine",
                "brand": "Zyprexa",
                "use": "Antipsychotic",
                "dea_class": "-"
            },
            {
                "generic": "Tolterodine",
                "brand": "Detrol",
                "use": "Incontinence",
                "dea_class": "-"
            },
            {
                "generic": "Ranitidine",
                "brand": "Zantac",
                "use": "Antacid (H2)",
                "dea_class": "-"
            },
            {
                "generic": "Famotidine",
                "brand": "Pepcid",
                "use": "Antacid (H2)",
                "dea_class": "-"
            },
            {
                "generic": "Diltiazem",
                "brand": "Cardizem",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Insulin Glargine",
                "brand": "Lantus",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Thyroid",
                "brand": "Armour Thyroid",
                "use": "Hormone replacement",
                "dea_class": "-"
            },
            {
                "generic": "Bupropion",
                "brand": "Wellbutrin",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Cetirizine",
                "brand": "Zyrtec",
                "use": "Antihistamine",
                "dea_class": "-"
            },
            {
                "generic": "Topiramate",
                "brand": "Topamax",
                "use": "Anticonvulsant",
                "dea_class": "-"
            },
            {
                "generic": "Valacyclovir",
                "brand": "Valtrex",
                "use": "Antiviral",
                "dea_class": "-"
            },
            {
                "generic": "Eszopiclone",
                "brand": "Lunesta",
                "use": "Sleep Aid",
                "dea_class": "C-IV"
            },
            {
                "generic": "Acyclovir",
                "brand": "Zovirax",
                "use": "Antiviral",
                "dea_class": "-"
            },
            {
                "generic": "Cefdinir",
                "brand": "Omnicef",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Clindamycin",
                "brand": "Cleocin",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Colchicine",
                "brand": "Colcrys",
                "use": "Antigout",
                "dea_class": "-"
            },
            {
                "generic": "Gemfibrozil",
                "brand": "Lopid",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Guiafenesin",
                "brand": "Robitussin",
                "use": "Expectorant",
                "dea_class": "-"
            },
            {
                "generic": "Glipizide",
                "brand": "Glucotrol",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Irbesartan",
                "brand": "Avapro",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Metoclopramide",
                "brand": "Reglan",
                "use": "Antispasmodic",
                "dea_class": "-"
            },
            {
                "generic": "Losartan",
                "brand": "Cozaar",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Meclizine",
                "brand": "Dramamine",
                "use": "Antiemetic",
                "dea_class": "-"
            },
            {
                "generic": "Metronidazole",
                "brand": "Flagyl",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Vitamin D",
                "brand": "Caltrate",
                "use": "Supplement",
                "dea_class": "-"
            },
            {
                "generic": "Testosterone",
                "brand": "AndroGel",
                "use": "Hormone replacement",
                "dea_class": "C-III"
            },
            {
                "generic": "Ropinirole",
                "brand": "Requip",
                "use": "Anti-Parkinson's",
                "dea_class": "-"
            },
            {
                "generic": "Risperidone",
                "brand": "Risperdal",
                "use": "Antipsychotic",
                "dea_class": "-"
            },
            {
                "generic": "Olopatadine",
                "brand": "Patanol",
                "use": "Antihistamine",
                "dea_class": "-"
            },
            {
                "generic": "Moxifloxacin",
                "brand": "Avelox",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Dexmethylphenidate",
                "brand": "Focalin",
                "use": "ADHD",
                "dea_class": "C-II"
            },
            {
                "generic": "Enoxaparin",
                "brand": "Lovenox",
                "use": "Anticoagulant",
                "dea_class": "-"
            },
            {
                "generic": "Fentanyl",
                "brand": "Duragesic",
                "use": "Analgesic",
                "dea_class": "C-II"
            },
            {
                "generic": "Dicyclomine",
                "brand": "Bentyl",
                "use": "Antispasmodic",
                "dea_class": "-"
            },
            {
                "generic": "Bisoprolol",
                "brand": "Zebeta",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Atomoxetine",
                "brand": "Strattera",
                "use": "ADHD",
                "dea_class": "-"
            },
            {
                "generic": "Ramipril",
                "brand": "Altace",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Temazepam",
                "brand": "Restoril",
                "use": "Sleep Aid",
                "dea_class": "C-IV"
            },
            {
                "generic": "Phentermine",
                "brand": "Adipex P",
                "use": "Appetite suppressant",
                "dea_class": "C-IV"
            },
            {
                "generic": "Quinapril",
                "brand": "Accupril",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Sildenafil",
                "brand": "Viagra",
                "use": "Erectile dysfunction",
                "dea_class": "-"
            },
            {
                "generic": "Ondansetron",
                "brand": "Zofran",
                "use": "Antiemetic",
                "dea_class": "-"
            },
            {
                "generic": "Oseltamivir",
                "brand": "Tamiflu",
                "use": "Antiviral",
                "dea_class": "-"
            },
            {
                "generic": "Methotrexate",
                "brand": "Rheumatrex",
                "use": "Antirheumatic",
                "dea_class": "-"
            },
            {
                "generic": "Dabigatran",
                "brand": "Pradaxa",
                "use": "Anticoagulant",
                "dea_class": "-"
            },
            {
                "generic": "Budesonide",
                "brand": "Uceris",
                "use": "Anti-inflammatory",
                "dea_class": "-"
            },
            {
                "generic": "Doxazosin",
                "brand": "Cardura",
                "use": "Urinary retention",
                "dea_class": "Antihypertensive"
            },
            {
                "generic": "Desvenlafaxine",
                "brand": "Pristiq",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Insulin Lispro",
                "brand": "Humalog",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Clarithromycin",
                "brand": "Biaxin",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Buspirone",
                "brand": "Buspar",
                "use": "Antianxiety",
                "dea_class": "-"
            },
            {
                "generic": "Finasteride",
                "brand": "Proscar",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Ketoconazole",
                "brand": "Nizoral",
                "use": "Antifungal",
                "dea_class": "-"
            },
            {
                "generic": "Solifenacin",
                "brand": "VESIcare",
                "use": "Bladder relaxant",
                "dea_class": "-"
            },
            {
                "generic": "Methadone",
                "brand": "Dolophine",
                "use": "Opioid addiction",
                "dea_class": "C-II"
            },
            {
                "generic": "Minocycline",
                "brand": "Minocin",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Phenazopyridine",
                "brand": "Pyridium",
                "use": "Analgesic (urinary)",
                "dea_class": "-"
            },
            {
                "generic": "Spironolactone",
                "brand": "Aldactone",
                "use": "Diuretic",
                "dea_class": "-"
            },
            {
                "generic": "Vardenafil",
                "brand": "Levitra",
                "use": "Erectile dysfunction",
                "dea_class": "-"
            },
            {
                "generic": "Clobetasol",
                "brand": "Clovate",
                "use": "Anti-inflammatory steriod",
                "dea_class": "-"
            },
            {
                "generic": "Benzonatate",
                "brand": "Tessalon",
                "use": "Antitussive (cough suppressant)",
                "dea_class": "-"
            },
            {
                "generic": "Divalproex",
                "brand": "Depakote",
                "use": "Anticonvulsant",
                "dea_class": "-"
            },
            {
                "generic": "Dutasteride",
                "brand": "Avodart",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Febuxostat",
                "brand": "Uloric",
                "use": "Antigout",
                "dea_class": "-"
            },
            {
                "generic": "Lamotrigine",
                "brand": "Lamictal",
                "use": "Antiepileptic",
                "dea_class": "-"
            },
            {
                "generic": "Nortriptyline",
                "brand": "Pamelor",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Roflumilast",
                "brand": "Daliresp",
                "use": "C.O.P.D.",
                "dea_class": "-"
            },
            {
                "generic": "Rabeprazole",
                "brand": "Aciphex",
                "use": "Antacid (PPI)",
                "dea_class": "-"
            },
            {
                "generic": "Etanercept",
                "brand": "Enbrel",
                "use": "Anti-arthritic",
                "dea_class": "-"
            },
            {
                "generic": "Nebivolol",
                "brand": "Bystolic",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Nabumetone",
                "brand": "Relafen",
                "use": "Analgesic (NSAID)",
                "dea_class": "-"
            },
            {
                "generic": "Nifedipine",
                "brand": "Procardia",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Nitrofurantoin",
                "brand": "Macrobid",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Nitroglycerine",
                "brand": "NitroStat SL",
                "use": "Anti-angina",
                "dea_class": "-"
            },
            {
                "generic": "Oxybutynin",
                "brand": "Ditropan",
                "use": "Incontinence",
                "dea_class": "-"
            },
            {
                "generic": "Tadalifil",
                "brand": "Cialis",
                "use": "Erectile dysfunction",
                "dea_class": "-"
            },
            {
                "generic": "Triamcinolone",
                "brand": "Kenalog",
                "use": "Anti-inflammatory steriod",
                "dea_class": "-"
            },
            {
                "generic": "Rivastigmine",
                "brand": "Exelon",
                "use": "Antidementia",
                "dea_class": "-"
            },
            {
                "generic": "Lansoprazole",
                "brand": "Prevacid",
                "use": "Antacid (PPI)",
                "dea_class": "-"
            },
            {
                "generic": "Cefuroxime",
                "brand": "Ceftin",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Methocarbamol",
                "brand": "Robaxin",
                "use": "Muscle Relaxer",
                "dea_class": "-"
            },
            {
                "generic": "Travoprost",
                "brand": "Travatan",
                "use": "Antiglaucoma",
                "dea_class": "-"
            },
            {
                "generic": "Lurasidone",
                "brand": "Latuda",
                "use": "Antipsychotic",
                "dea_class": "-"
            },
            {
                "generic": "Terazosin",
                "brand": "Hytrin",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Sumatriptan",
                "brand": "Imitrex",
                "use": "Antimigraine",
                "dea_class": "-"
            },
            {
                "generic": "Raloxifene",
                "brand": "Evista",
                "use": "Osteoporosis",
                "dea_class": "-"
            },
            {
                "generic": "Mirtazepine",
                "brand": "Remeron",
                "use": "Antidepressant",
                "dea_class": "-"
            },
            {
                "generic": "Adalimumab",
                "brand": "Humira",
                "use": "Immunosuppressant",
                "dea_class": "-"
            },
            {
                "generic": "Benztropine",
                "brand": "Cogentin",
                "use": "Anti-Parkinson's",
                "dea_class": "-"
            },
            {
                "generic": "Baclofen",
                "brand": "Gablofen",
                "use": "",
                "dea_class": "-"
            },
            {
                "generic": "Hydralazine",
                "brand": "Apresoline",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Mupirocin",
                "brand": "Bactroban",
                "use": "Antibiotic",
                "dea_class": "-"
            },
            {
                "generic": "Propranolol",
                "brand": "Inderal",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Varenicline",
                "brand": "Chantix",
                "use": "Anti-smoking",
                "dea_class": "-"
            },
            {
                "generic": "Verapamil",
                "brand": "Verelan",
                "use": "Antihypertensive",
                "dea_class": "-"
            },
            {
                "generic": "Clotrimazole",
                "brand": "Lotrimin",
                "use": "Antifungal",
                "dea_class": "-"
            },
            {
                "generic": "Phenytoin",
                "brand": "Dilantin",
                "use": "Anticonvulsant",
                "dea_class": "-"
            },
            {
                "generic": "Pramipexole",
                "brand": "Mirapex",
                "use": "Anti-Parkinson's",
                "dea_class": "-"
            },
            {
                "generic": "Liraglutide",
                "brand": "Victoza",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Ticagrelor",
                "brand": "Brilinta",
                "use": "Anticoagulant",
                "dea_class": "-"
            },
            {
                "generic": "Diclofenac",
                "brand": "Voltaren",
                "use": "Analgesic (NSAID)",
                "dea_class": "-"
            },
            {
                "generic": "Saxagliptin",
                "brand": "Onglyza",
                "use": "Antidiabetic",
                "dea_class": "-"
            },
            {
                "generic": "Lomitapide",
                "brand": "Juxtapid",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Tizanidine",
                "brand": "Zanaflex",
                "use": "Muscle Relaxer",
                "dea_class": "-"
            },
            {
                "generic": "Amphetamine/Dextroamphetamine",
                "brand": "Adderall",
                "use": "ADHD",
                "dea_class": "C-II"
            },
            {
                "generic": "Zoster Vaccine",
                "brand": "Zostavax",
                "use": "Shingles Vaccine",
                "dea_class": "-"
            },
            {
                "generic": "Ezetimibe",
                "brand": "Zetia",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            },
            {
                "generic": "Simvastatin",
                "brand": "Vytorin",
                "use": "Cholesterol lowering",
                "dea_class": "-"
            }
        

   
    
])
}
module.exports = {insertCardData}