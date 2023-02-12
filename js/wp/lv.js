const countries_local=["Afganistāna", "Ālandu salas", "Albānija", "Alžīrija", "Amerikas Samoa", "Andora", "Angola", "Angilja", "Antarktīda", "Antigva un Barbuda", "Argentīna", "Armēnija", "Aruba", "Austrālija", "Austrija", "Azerbaidžāna", "Bahamu salas", "Bahreina", "Bangladeša", "Barbadosa", "Baltkrievija", "Beļģija", "Belīze", "Benina", "Bermudu salas", "Butāna", "Bolīvija", "Bonērs, Svētais Eistātijs un Saba", "Bosnija un Hercegovina", "Botsvāna", "Buvē sala", "Brazīlija", "Britu Indijas okeāna teritorija", "Britu Virdžīnu salas", "Bruneja", "Bulgārija", "Burkinafaso", "Burundi", "Kambodža", "Kamerūna", "Kanāda","Kaboverde", "Kaimanu salas", "Centrālfrikas Republika", "Čada", "Čīle", "Ķīna","Ziemassvētku sala", "Kokosu salas", "Kolumbija", "Komoru salas", "Kuka salas", "Kostarika", "Horvātija","Kuba", "Curacao", "Kipra", "Čehija", "Kongo Demokrātiskā Republika", "Dānija", "Džibutija", "Dominika", "Dominikānas Republika", "Austrumtimora", "Ekvadora", "Ēģipte", "Salvadora", "Ekvatoriālā Gvineja", "Eritreja", "Igaunija", "Etiopija", "Folklenda salas", "Fēru salas", "Fidži", "Somija", "Francija", "Franču Gviāna", "Franču Polinēzija", "Francijas dienvidu teritorijas", "Gabona", "Gambija", "Gruzija", "Vācija", "Gana", "Gibraltārs", "Grieķija", "Grenlande", "Grenāda", "Gvadelupa", "Guama", "Gvatemala", "Gērnsija", "Gvineja", "Gvineja-Bisava", "Gajāna", "Haiti", "Hērda sala un Makdonalda salas", "Hondurasa", "Honkonga", "Ungārija", "Islande", "Indija", "Indonēzija", "Irāna", "Irāka", "Īrija", "Menas sala", "Izraēla", "Itālija", "Kotdivuāra", "Jamaika", "Japāna", "Džērsija", "Jordan", "Kazahstāna", "Kenija","Kiribati", "Kosova", "Kuveita", "Kirgizstāna", "Laosa", "Latvija","Libāna", "Lesoto", "Libērija", "Lībija", "Lihtenšteina", "Lietuva", "Luksemburga", "Makao","Maķedonija", "Madagaskara", "Malāvi", "Malaizija", "Maldīvija", "Mali","Malta", "Māršala salas", "Martinika", "Mauritānija", "Maurīcija", "Mayotte", "Meksika", "Mikronēzija", "Moldova", "Monako", "Mongolija", "Melnkalne", "Montserrata", "Maroka", "Mozambika", "Mjanma","Namībija", "Nauru", "Nepāla", "Nīderlande", "Nīderlandes Antiļas", "Jaunkaledonija", "Jaunzēlande", "Nikaragva", "Nigēra", "Nigērija", "Niue", "Norfolkas sala", "Ziemeļkoreja", "Ziemeļu Marianas salas", "Norvēģija", "Omāna", "Pakistāna", "Palau", "Palestīnas teritorija", "Panama", "Papua-Jaungvineja", "Paragvaja", "Peru","Filipīnas", "Pitkērna", "Polija", "Portugāle", "Puertoriko", "Katara", "Kongo Republika", "Atkalapvienošanās", "Rumānija", "Krievija", "Ruanda", "Sv. Bartelmijs", "Svētā Helēna", "Sentkitsa un Nevisa", "Svētā Lūcija", "Svētais Mārtiņš", "Senpjērs un Mikelona", "Senvinsents un Grenadīnas", "Samoa", "Sanmarīno", "Santome un Prinsipi", "Saūda Arābija", "Senegāla", "Serbija", "Serbija un Melnkalne", "Seišelu salas", "Sjerraleone", "Singapūra", "Sintmaarten", "Slovākija", "Slovēnija", "Zālamana salas", "Somālija", "Dienvidāfrika", "Dienviddžordžija un Dienvidsendviču salas", "Dienvidkoreja", "Dienvidsudāna", "Spānija", "Šrilanka", "Sudāna", "Surinama", "Svalbāra un Jans Majens", "Svazilenda", "Zviedrija", "Šveice", "Sīrija", "Taivāna", "Tadžikistāna", "Tanzānija", "Taizeme", "Togo", "Tokelau", "Tonga", "Trinidāda un Tobāgo", "Tunisija", "Turcija", "Turkmenistāna", "Tērksas un Kaikosas", "Tuvalu", "ASV Virdžīnu salas", "Uganda", "Ukraina", "Apvienotie Arābu Emirāti", "Apvienotā Karaliste", "Amerikas Savienotās Valstis", "Savienoto Valstu Mazās attālās salas", "Urugvaja", "Uzbekistāna", "Vanuatu", "Vatikāns", "Venecuēla", "Vjetnama", "Volis un Futuna", "Rietumsahāra", "Jemena", "Zambija", "Zimbabve"]; const state_local=["Aizkraukle District","Alūksne District","Balvi District","Bauska District","Cēsis District","Daugavpils District","Daugavpils","Dobele District","Gulbene District","Jēkabpils District","Jelgava District","Jelgava","Jūrmala","Krāslava District","Kuldīga District","Liepāja District","Liepāja","Limbaži District","Ludza District","Madonas rajons","Ogres novads","Preiļi District","Rēzekne District","Rēzekne","Rīgas rajons","Rīga","Saldus District","Talsi District","Tukums District","Valka District","Valmiera District","Ventspils District","Ventspils"]; const state_en=["Aizkraukle District","Alūksne District","Balvi District","Bauska District","Cēsis District","Daugavpils District","Daugavpils","Dobele District","Gulbene District","Jēkabpils District","Jelgava District","Jelgava","Jūrmala","Krāslava District","Kuldīga District","Liepāja District","Liepāja","Limbaži District","Ludza District","Madona District","Ogre District","Preiļi District","Rēzekne District","Rēzekne","Riga District","Rīga","Saldus District","Talsi District","Tukums District","Valka District","Valmiera District","Ventspils District","Ventspils"]; const countries_en=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]; 