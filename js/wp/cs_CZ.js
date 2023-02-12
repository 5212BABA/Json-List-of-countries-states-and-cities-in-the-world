const state_local=["Hlavní město Praha","Středočeský kraj","Jihočeský kraj","Plzeňský kraj","Karlovarský kraj","Ústecký kraj","Liberecký kraj","Královéhradecký kraj","Pardubický kraj","Kraj Vysočina","Jihomoravský kraj","Olomoucký kraj","Moravskoslezský kraj","Zlínský kraj",];const state_en=["Prague","Central Bohemian","South Bohemian","Plzeň","Karlovy Vary","Ústí nad Labem","Liberec","Hradec Králové","Pardubice","Vysočina","South Moravian","Olomouc","Zlín","Moravian-Silesian",];const countries_local=["Afghánistán","Alandské ostrovy","Albánie","Alžírsko","Americká Samoa","Andorra","Angola","Anguilla","Antarktida","Antigua a Barbuda","Argentina","Arménie","Aruba","Austrálie","Rakousko","Ázerbájdžán","Bahamy","Bahrajn","Bangladéš","Barbados","Bělorusko","Belgie","Belize","Benin","Bermudy","Bhútán","Bolívie","Bonaire, Svatý Eustatius a Saba","Bosna a Hercegovina","Botswana","Bouvetův ostrov","Brazílie","Britské teritorium Indického oceánu","Britská panna Ostrovy","Brunej","Bulharsko","Burkina Faso","Burundi","Kambodža","Kamerun","Kanada","Kapverdy","Kajmanské ostrovy","Středoafrická republika","Čad","Chile","Čína","Vánoční ostrov","Kokosové ostrovy","Kolumbie","Komory","Cookovy ostrovy","Kostarika","Chorvatsko","Kuba","Curacao","Kypr","Česká republika","Demokratická republika Kongo","Dánsko","Džibutsko","Dominika","Dominikánská republika","Východní Timor","Ekvádor","Egypt","Salvador","Rovníková Guinea","Eritrea","Estonsko","E thiopie","Falklandské ostrovy","Faerské ostrovy","Fidži","Finsko","Francie","Francouzská Guyana","Francouzská Polynésie","Francouzská jižní území","Gabon","Gambie","Gruzie","Německo","Ghana","Gibraltar","Řecko","Grónsko","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea- Bissau, Guyana, Haiti, Heardův ostrov a McDonaldovy ostrovy, Honduras, Hongkong, Maďarsko, Island, Indie, Indonésie, Írán, Irák","Irsko","Isle of Man","Izrael","Itálie","Pobřeží slonoviny","Jamajka","Japonsko","Jersey","Jordánsko","Kazachstán","Keňa","Kiribati","Kosovo","Kuvajt","Kyrgyzstán","Laos","Lotyšsko","Libanon","Lesotho","Libérie","Libye","Lichtenštejnsko","Litva","Lucembursko","Macao","Makedonie","Madagaskar","Malawi","Malajsie","Maledivy","Mali","Malta","Marshallovy ostrovy","Martinique","Mauritánie","Mauritius","Mayotte","Mexiko","Mikronésie","Moldavsko","Monako","Mongolsko","Černá Hora","Montserrat","Maroko","Mozambik","M yanmar","Namibie","Nauru","Nepál","Nizozemsko","Nizozemské Antily","Nová Kaledonie","Nový Zéland","Nikaragua","Niger","Nigérie","Niue","Ostrov Norfolk","Severní Korea","Severní Mariany","Norsko","Omán","Pákistán","Palau","Palestinské území","Panama","Papua Nová Guinea","Paraguay","Peru","Filipíny","Pitcairn","Polsko","Portugalsko","Portoriko","Katar","Konžská republika","Reunion","Rumunsko","Rusko","Rwanda","Svatý Bartoloměj","Svatá Helena","Svatý Kryštof a Nevis","Svatá Lucie","Svatý Martin","Saint Pierre a Miquelon","Svatý Vincent a Grenadiny","Samoa","San Marino, Svatý Tomáš a Princův ostrov, Saúdská Arábie, Senegal, Srbsko, Srbsko a Černá Hora, Seychely, Sierra Leone, Singapur, Sint Maarten, Slovensko","Slovinsko","Šalamounovy ostrovy","Somálsko","Jižní Afrika","Jižní Gruzie a Jižní Sandwichovy ostrovy","Jižní Korea","Jižní Súdán","Španělsko","Srí Lanka","Súdán","Surinam","Svalbard a Jan. Mayen, Svazijsko, Švédsko, Švýcarsko, Sýrie, Tchaj-wan, Tádžikistán, Tanzanie, Thajsko, Togo, Tokelau, Tonga, Trinidad a Tobago","Tunisko","Turecko","Turkmenistán","Turks a Caicos","Tuvalu","USA Panenské ostrovy","Uganda","Ukrajina","Spojené arabské emiráty","Spojené království","Spojené státy","Menší odlehlé ostrovy Spojených států","Uruguay","Uzbekistán","Vanuatu","Vatikán","Venezuela","Vietnam","Wallis a Futuna","Západní Sahara","Jemen","Zambie","Zimbabwe"];const countries_en=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];