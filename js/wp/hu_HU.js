const countries_local=["Afganisztán","Aland-szigetek","Albánia","Algéria","Amerikai Szamoa","Andorra","Angola","Anguilla","Antarktisz","Antigua és Barbuda","Argentína","Örményország","Aruba","Ausztrália","Ausztria","Azerbajdzsán","Bahamák","Bahrein","Banglades","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhután","Bolívia","Bonaire, Saint Eustatius és Saba","Bosznia és Hercegovina","Botswana","Bouvet-sziget","Brazília","Brit Indiai-óceáni Terület","British Virgin Szigetek","Brunei","Bulgária","Burkina Faso","Burundi","Kambodzsa","Kamerun","Kanada","Zöld-foki szigetek","Kajmán-szigetek","Közép-afrikai Köztársaság","Csád","Chile","China","Christmas Island","Kókusz-szigetek","Kolumbia","Comore-szigetek","Cook-szigetek","Costa Rica","Croatia","Cuba","Curacao","Ciprus","Cseh Köztársaság","Kongói Demokratikus Köztársaság","Dánia","Dzsibuti","Dominika","Dominikai Köztársaság","Kelet-Timor","Ecuador","Egyiptom","El Salvador","Egyenlítői-Guinea","Eritrea","Észtország","E tiópia","Falkland-szigetek","Feröer-szigetek","Fidzsi-szigetek","Finnország","Franciaország","Francia Guyana","Francia Polinézia","Francia déli területek","Gabon","Gambia","Grúzia","Németország","Ghána","Gibraltár","Görögország","Grönland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea- Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Magyarország","Izland","India","Indonézia","Irán","Irak","Írország","Man-sziget","Izrael","Olaszország","Elefántcsontpart","Jamaica","Japán","Jersey","Jordan","Kazahsztán","Kenya","Kiribati","Koszovó","Kuvait","Kirgizisztán","Laosz","Lettország","Libanon","Lesotho","Libéria","Líbia","Liechtenstein","Litvánia","Luxemburg","Makaó","Macedónia","Madagaszkár","Malawi","Malajzia", ​​"Maldív-szigetek","Mali","Málta","Marshall-szigetek","Martinique","Mauritánia","Mauritius","Mayotte","Mexikó","Mikronézia", ​​"Moldova","Monaco","Mongólia","Montenegró","Montserrat","Marokkó","Mozambik","M yanmar","Namibia","Nauru","Nepal","Netherlands","Holland Antills","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk-sziget","Észak-Korea","Északi Mariana-szigetek","Norvégia","Omán","Pakisztán","Palau","Palesztin Terület","Panama","Pápua Új-Guinea","Paraguay","Peru","Fülöp-szigetek","Pitcairn","Lengyelország","Portugália","Puerto Rico","Katar","Kongói Köztársaság","Reunion","Románia","Oroszország","Ruanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre és Miquelon","Saint Vincent és a Grenadine-szigetek","Szamoa","San Marino","Sao Tome és Principe","Szaúd-Arábia","Szenegál","Szerbia","Szerbia és Montenegró","Seychelles","Sierra Leone","Szingapúr","Sint Maarten","Szlovákia","Szlovénia","Salamon-szigetek","Szomália","Dél-Afrika","Dél-Georgia és a Déli Sandwich-szigetek","Dél-Korea","Dél-Szudán","Spanyolország","Sri Lanka","Szudán","Suriname","Svalbard és jan. Mayen","Szváziföld","Svédország","Svájc","Szíria","Tajvan","Tádzsikisztán","Tanzánia","Thaiföld","Togo","Tokelau","Tonga","Trinidad és Tobago","Tunézia","Törökország","Türkmenisztán","Turks- és Caicos-szigetek","Tuvalu","US Virgin-szigetek","Uganda","Ukrajna","Egyesült Arab Emirátusok","Egyesült Királyság","Egyesült Államok","Egyesült Államok külterületi kisebb szigetei","Uruguay","Üzbegisztán","Vanuatu","Vatikán","Venezuela","Vietnam","Wales and Futuna","Nyugat-Szahara","Jemen","Zambia","Zimbabwe"]; const state_local=["Észak-Magyaroszág","Észak-Alföld","Dél-Alföld","Közép-Magyarország","Közép-Dunántúl","Nyugat-Dunántúl","Dél-Dunántúl"]; const state_en=["Northern Hungary","Northern Great Plain","Southern Great Plain","Central Hungary","Central Transdanubia","Western Transdanubia","Southern Transdanubia"]; const countries_en=["Afghanistan","Aland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Saint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Cook Islands","Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Reunion","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican","Venezuela","Vietnam","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]; 