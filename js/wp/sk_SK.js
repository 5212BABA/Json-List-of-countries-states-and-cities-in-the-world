const countries_local=["Afganistan", "Kepulauan Aland", "Albánsko", "Alžírsko", "Samoa Amerika", "Andorra", "Angola", "Anguilla", "Antartika", "Antigua a Barbuda", "Argentína", "Arménsko", "Aruba", "Austrália", "Rakúsko", "Azerbajdžan", "Bahamy", "Bahrajn", "Bangladéš", "Barbados", "Bielorusko", "Belgicko", "Belize", "Benin", "Bermudy", "Bhután", "Bolívia", "Bonaire, svätý Eustatius dan Saba", "Bosna a Hercegovina", "Botswana", "Pulau Bouvet", "Brazília", "Wilayah Lautan Hindčina Britská", "Britské Panenské ostrovy", "Brunej", "Bulharsko", "Burkina Faso", "Burundi", "Kemboja", "Kamerun", "Kanada", "Tanjung Verde", "Kejmanský Kajman Kepulau", "Republik Afrika Tengah", "Čad", "Čile", "Čína", "Pulau Krismas", "Kepulauan Cocos", "Kolumbia", "komory", "Pulau Cook", "Kosta Rika", "Chorvátsko", "Kuba", "Curacao", "Cyprus", "Česká republika", "Republika Demokratik Kongo", "Dánsko", "Džibutsko", "Dominika", "Republika Dominika", "Timor Timur", "Ekvádor", "Mesir", "El Salvador", "Rovníková Guinea", "Eritrea", "Estónsko", "Etiópia", "Kepulauan Falkland", "Kepulauan Faere", "Fiji", "Fínsko", "Perancis", "Guiana Perancis", "Polinesia Perancis", "Wilayah Selatan Perancis", "Gabon", "Gambia", "Gruzínsko", "Jerman", "Ghana", "Gibraltár", "Grécko", "Grónsko", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Pulau Heard a Pulau McDonald", "Honduras", "Hong Kong", "Maďarsko", "Island", "India", "Indonézia", "Irán", "Irak", "Írsko", "Pulau Manusia", "Izrael", "taliančina", "Pantai Gading", "Jamajka", "Jepun", "Jersey", "Jordánsko", "Kazachstan", "Keňa", "Kiribati", "Kosovo", "Kuvajt", "Kirgizsko", "Laos", "Lotyšsko", "Lubnan", "Lesotho", "Libéria", "Líbya", "Lichtenštajnsko", "Litva", "Luxembursko", "Macao", "Macedónsko", "Madagaskar", "Malawi", "Malajzia", "Maldivy", "Mali", "Malta", "Kepulauan Marshall", "Martinik", "Mauritánia", "Maurícius", "Mayotte", "Mexiko", "Mikronézia", "Moldavsko", "Monaco", "Mongolsko", "Čierna hora", "Montserrat", "Maghribi", "Mozambik", "Mjanmarsko", "Namíbia", "Nauru", "Nepál", "Belanda", "Antiles Belanda", "Kaledonia Baru", "Nový Zéland", "Nikaragua", "Niger", "Nigéria", "Niue", "Pulau Norfolk", "Kórea Utara", "Kepulauan Mariana Utara", "Nórsko", "Omán", "Pakistan", "Palau", "Wilayah Palestin", "Panama", "Papua-Nová Guinea", "Paraguaj", "Peru", "Filipina", "Pitcairn", "Poľsko", "Portugalsko", "Portoriko", "Katar", "Republika Kongo", "Reunion", "Rumunsko", "Rusko", "Rwanda", "Svätý Barthelemy", "Svätá Helena", "Svätý Krištof a Nevis", "Svätá Lucia", "Svätý Martin", "Saint Pierre dan Miquelon", "Svätý Vincent dan Grenadíny", "Samoa", "San Marino", "Sao Tome dan Principe", "arabská Saudská Arábia", "Senegal", "Srbsko", "Srbsko a Čierna Hora", "Seychely", "Sierra Leone", "Singapura", "Sint Maarten", "Slovensko", "Slovinsko", "Kepulauan Solomon", "Somálsko", "Afrika Selatan", "Georgia Selatan a Kepulauan Sandwich Selatan", "Kórejský selatán", "Sudánsky Selatán", "Sepanyol", "Srí Lanka", "Sudán", "Suriname", "Svalbard a Jan Mayen", "Svazijsko", "Švédsko", "Švajčiarsko", "Sýria", "Taiwan", "Tadžikistan", "Tanzánia", "Thajsko", "Ísť", "Tokelau", "Tonga", "Trinidad dan Tobago", "Tunisko", "turki", "Turkménsko", "Kepulauan Turki dan Caicos", "Tuvalu", "A.S. Kepulauan Virgin", "Uganda", "Ukrajina", "Emiriah Arab Bersatu", "Spojene kralovstvo", "Amerika Syarikat", "Kepulauan Terpencil Kecil Amerika Syarikat", "Uruguaj", "Uzbekistan", "Vanuatu", "Vatikán", "Venezuela", "Vietnam", "Wallis dan Futuna", "Sahara Barat", "Yaman", "Zambia", "Zimbabwe"]; const state_local=["Banskobystrický","Bratislavský","Košický","Nitriansky","Prešovský","Trenčiansky","Trnavský","Žilinský"]; const state_en=["Bratislava","Trnava","Trenčín","Nitra","Žilina","Banská Bystrica","Prešov","Košice"]; const countries_en=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]; 