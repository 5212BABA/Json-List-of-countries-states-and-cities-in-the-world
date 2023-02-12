const countries_local=["Afganistán","Islas Aland","Albania","Argelia","Samoa Americana","Andorra","Angola","Anguila","Antártida","Antigua y Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaiyán","Bahamas","Bahréin","Bangladesh","Barbados","Bielorrusia","Bélgica","Belice","Benin","Bermudas","Bután","Bolivia","Bonaire, San Eustaquio y Saba","Bosnia y Herzegovina","Botswana","Isla Bouvet","Brasil","Territorio Británico del Océano Índico","Virgen Británica Islas","Brunei","Bulgaria","Burkina Faso","Burundi","Camboya","Camerún","Canadá","Cabo Verde","Islas Caimán","República Centroafricana","Chad","Chile","China","Isla de Navidad","Islas Cocos","Colombia","Comoras","Islas Cook","Costa Rica","Croacia","Cuba","Curazao","Chipre","República Checa","República Democrática del Congo","Dinamarca","Djibouti","Dominica","República Dominicana","Timor Oriental","Ecuador","Egipto","El Salvador","Guinea Ecuatorial","Eritrea","Estonia","E tiopía","Islas Malvinas","Islas Feroe","Fiji","Finlandia","Francia","Guayana Francesa","Polinesia Francesa","Territorios Australes Franceses","Gabón","Gambia","Georgia","Alemania","Ghana","Gibraltar","Grecia","Groenlandia","Granada","Guadalupe","Guam","Guatemala","Guernsey","Guinea","Guinea- Bissau","Guyana","Haití","Isla Heard e islas McDonald","Honduras","Hong Kong","Hungría","Islandia","India","Indonesia","Irán","Irak","Irlanda","Isla de Man","Israel","Italia","Costa de Marfil","Jamaica","Japón","Jersey","Jordania","Kazajstán","Kenia","Kiribati","Kosovo","Kuwait","Kirguistán","Laos","Letonia","Líbano","Lesotho","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macao","Macedonia","Madagascar","Malawi","Malasia","Maldivas","Malí","Malta","Islas Marshall","Martinica","Mauritania","Mauricio","Mayotte","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Montserrat","Marruecos","Mozambique","M yanmar","Namibia","Nauru","Nepal","Países Bajos","Antillas Neerlandesas","Nueva Caledonia","Nueva Zelanda","Nicaragua","Níger","Nigeria","Niue","Isla Norfolk","Corea del Norte","Islas Marianas del Norte","Noruega","Omán","Pakistán","Palau","Territorio Palestino","Panamá","Papua Nueva Guinea","Paraguay","Perú","Filipinas","Pitcairn","Polonia","Portugal","Puerto Rico","Qatar","República del Congo","Reunión","Rumanía","Rusia","Rwanda","San Bartolomé","Santa Elena","San Cristóbal y Nieves","Santa Lucía","San Martín","San Pedro y Miquelón","San Vicente y las Granadinas","Samoa","San Marino","Santo Tomé y Príncipe","Arabia Saudita","Senegal","Serbia","Serbia y Montenegro","Seychelles","Sierra Leona","Singapur","Sint Maarten","Eslovaquia","Eslovenia","Islas Salomón","Somalia","Sudáfrica","Georgia del Sur y Sandwich del Sur","Corea del Sur","Sudán del Sur","España","Sri Lanka","Sudán","Surinam","Svalbard y Jan. Mayen","Swazilandia","Suecia","Suiza","Siria","Taiwán","Tayikistán","Tanzania","Tailandia","Togo","Tokelau","Tonga","Trinidad y Tobago","Túnez","Turquía","Turkmenistán","Islas Turcas y Caicos","Tuvalu","EE. UU. Islas Vírgenes","Uganda","Ucrania","Emiratos Árabes Unidos","Reino Unido","Estados Unidos","Islas menores periféricas de los Estados Unidos","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Gales y Futuna","Sahara Occidental","Yemen","Zambia","Zimbabwe"]; const state_local=["]; const state_en=["La Coruña","Álava","Albacete","Alicante","Almería","Asturias","Ávila","Badajoz","Balearic Islands","Barcelona","Biscay","Burgos","Cáceres","Cádiz","Cantabria","Castellón","Ciudad Real","Córdoba","Cuenca","Guipúzcoa","Girona","Granada","Guadalajara","Huelva","Huesca","Jaén","La Rioja","Las Palmas","León","Lleida","Lugo","Madrid","Málaga","Murcia","Navarre","Ourense","Palencia","Pontevedra","Salamanca","Santa Cruz de Tenerife","Segovia","Seville","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Zamora","Zaragoza","]; const countries_en=["Afghanistan" ,"Aland Islands" ,"Albania" ,"Algeria" ,"American Samoa" ,"Andorra" ,"Angola" ,"Anguilla" ,"Antarctica" ,"Antigua and Barbuda" ,"Argentina" ,"Armenia" ,"Aruba" ,"Australia" ,"Austria" ,"Azerbaijan" ,"Bahamas" ,"Bahrain" ,"Bangladesh" ,"Barbados" ,"Belarus" ,"Belgium" ,"Belize" ,"Benin" ,"Bermuda" ,"Bhutan" ,"Bolivia" ,"Bonaire, Saint Eustatius and Saba" ,"Bosnia and Herzegovina" ,"Botswana" ,"Bouvet Island" ,"Brazil" ,"British Indian Ocean Territory" ,"British Virgin Islands" ,"Brunei" ,"Bulgaria" ,"Burkina Faso" ,"Burundi" ,"Cambodia" ,"Cameroon" ,"Canada" ,"Cape Verde" ,"Cayman Islands" ,"Central African Republic" ,"Chad" ,"Chile" ,"China" ,"Christmas Island" ,"Cocos Islands" ,"Colombia" ,"Comoros" ,"Cook Islands" ,"Costa Rica" ,"Croatia" ,"Cuba" ,"Curacao" ,"Cyprus" ,"Czech Republic" ,"Democratic Republic of the Congo" ,"Denmark" ,"Djibouti" ,"Dominica" ,"Dominican Republic" ,"East Timor" ,"Ecuador" ,"Egypt" ,"El Salvador" ,"Equatorial Guinea" ,"Eritrea" ,"Estonia" ,"Ethiopia" ,"Falkland Islands" ,"Faroe Islands" ,"Fiji" ,"Finland" ,"France" ,"French Guiana" ,"French Polynesia" ,"French Southern Territories" ,"Gabon" ,"Gambia" ,"Georgia" ,"Germany" ,"Ghana" ,"Gibraltar" ,"Greece" ,"Greenland" ,"Grenada" ,"Guadeloupe" ,"Guam" ,"Guatemala" ,"Guernsey" ,"Guinea" ,"Guinea-Bissau" ,"Guyana" ,"Haiti" ,"Heard Island and McDonald Islands" ,"Honduras" ,"Hong Kong" ,"Hungary" ,"Iceland" ,"India" ,"Indonesia" ,"Iran" ,"Iraq" ,"Ireland" ,"Isle of Man" ,"Israel" ,"Italy" ,"Ivory Coast" ,"Jamaica" ,"Japan" ,"Jersey" ,"Jordan" ,"Kazakhstan" ,"Kenya" ,"Kiribati" ,"Kosovo" ,"Kuwait" ,"Kyrgyzstan" ,"Laos" ,"Latvia" ,"Lebanon" ,"Lesotho" ,"Liberia" ,"Libya" ,"Liechtenstein" ,"Lithuania" ,"Luxembourg" ,"Macao" ,"Macedonia" ,"Madagascar" ,"Malawi" ,"Malaysia" ,"Maldives" ,"Mali" ,"Malta" ,"Marshall Islands" ,"Martinique" ,"Mauritania" ,"Mauritius" ,"Mayotte" ,"Mexico" ,"Micronesia" ,"Moldova" ,"Monaco" ,"Mongolia" ,"Montenegro" ,"Montserrat" ,"Morocco" ,"Mozambique" ,"Myanmar" ,"Namibia" ,"Nauru" ,"Nepal" ,"Netherlands" ,"Netherlands Antilles" ,"New Caledonia" ,"New Zealand" ,"Nicaragua" ,"Niger" ,"Nigeria" ,"Niue" ,"Norfolk Island" ,"North Korea" ,"Northern Mariana Islands" ,"Norway" ,"Oman" ,"Pakistan" ,"Palau" ,"Palestinian Territory" ,"Panama" ,"Papua New Guinea" ,"Paraguay" ,"Peru" ,"Philippines" ,"Pitcairn" ,"Poland" ,"Portugal" ,"Puerto Rico" ,"Qatar" ,"Republic of the Congo" ,"Reunion" ,"Romania" ,"Russia" ,"Rwanda" ,"Saint Barthelemy" ,"Saint Helena" ,"Saint Kitts and Nevis" ,"Saint Lucia" ,"Saint Martin" ,"Saint Pierre and Miquelon" ,"Saint Vincent and the Grenadines" ,"Samoa" ,"San Marino" ,"Sao Tome and Principe" ,"Saudi Arabia" ,"Senegal" ,"Serbia" ,"Serbia and Montenegro" ,"Seychelles" ,"Sierra Leone" ,"Singapore" ,"Sint Maarten" ,"Slovakia" ,"Slovenia" ,"Solomon Islands" ,"Somalia" ,"South Africa" ,"South Georgia and the South Sandwich Islands" ,"South Korea" ,"South Sudan" ,"Spain" ,"Sri Lanka" ,"Sudan" ,"Suriname" ,"Svalbard and Jan Mayen" ,"Swaziland" ,"Sweden" ,"Switzerland" ,"Syria" ,"Taiwan" ,"Tajikistan" ,"Tanzania" ,"Thailand" ,"Togo" ,"Tokelau" ,"Tonga" ,"Trinidad and Tobago" ,"Tunisia" ,"Turkey" ,"Turkmenistan" ,"Turks and Caicos Islands" ,"Tuvalu" ,"U.S. Virgin Islands" ,"Uganda" ,"Ukraine" ,"United Arab Emirates" ,"United Kingdom" ,"United States" ,"United States Minor Outlying Islands" ,"Uruguay" ,"Uzbekistan" ,"Vanuatu" ,"Vatican" ,"Venezuela" ,"Vietnam" ,"Wallis and Futuna" ,"Western Sahara" ,"Yemen" ,"Zambia" ,"Zimbabwe"]; 