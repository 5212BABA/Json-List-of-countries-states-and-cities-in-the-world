const countries_local=["Afganistan","Ahvenamaa saared","Albaania","Alžeeria","Ameerika Samoa","Andorra","Angola","Anguilla","Antarktika","Antigua ja Barbuda","Argentina","Armeenia","Aruba","Austraalia","Austria","Aserbaidžaan","Bahama","Bahrain","Bangladesh","Barbados","Valgevene","Belgia","Belize","Benin","Bermuda","Bhutan","Boliivia","Bonaire, Saint Eustatius ja Saba","Bosnia ja Hertsegoviina","Botswana","Bouvet saar","Brasiilia","Briti India ookeani territoorium","Briti neitsi Saared","Brunei","Bulgaaria","Burkina Faso","Burundi","Kambodža","Kamerun","Kanada","Cabo Verde","Kaimanisaared","Kesk-Aafrika Vabariik","Tšaad","Tšiili","Hiina","Jõulusaar","Kookosesaared","Colombia","Komoorid","Cooki saared","Costa Rica","Horvaatia","Kuuba","Curacao","Küpros","Tšehhi Vabariik","Kongo Demokraatlik Vabariik","Taani","Djibouti","Dominica","Dominikaani Vabariik","Ida-Timor","Ecuador","Egiptus","El Salvador","Ekvatoriaal-Guinea","Eritrea","Eesti","E tioopia","Falklandi saared","Fääri saared","Fidži","Soome","Prantsusmaa","Prantsuse Guajaana","Prantsuse Polüneesia","Prantsuse lõunaterritooriumid","Gabon","Gambia","Gruusia","Saksamaa","Ghana","Gibraltar","Kreeka","Gröönimaa","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea- Bissau","Guyana","Haiti","Heard Island ja McDonald Islands","Honduras","Hong Kong","Ungari","Island","India","Indoneesia","Iraan","Iraak","Iirimaa","Mani saar","Iisrael","Itaalia","Elevandiluurannik","Jamaica","Jaapan","Jersey","Jordaania","Kasahstan","Kenya","Kiribati","Kosovo","Kuveit","Kõrgõzstan","Laos","Läti","Liibanon","Lesotho","Libeeria","Liibüa","Liechtenstein","Leedu","Luksemburg","Macao","Makedoonia","Madagaskar","Malawi","Malaisia","Maldiivid","Mali","Malta","Marshalli saared","Martinique","Mauritania","Mauritius","Mayotte","Mehhiko","Mikroneesia","Moldova","Monaco","Mongoolia","Montenegro","Montserrat","Maroko","Mosambiik","M yanmar","Namiibia","Nauru","Nepal","Holland","Hollandi Antillid","Uus-Kaledoonia","Uus-Meremaa","Nicaragua","Niger","Nigeeria","Niue","Norfolki saar","Põhja-Korea","Põhja-Mariaanid","Norra","Omaan","Pakistan","Palau","Palestiina ala","Panama","Paapua Uus-Guinea","Paraguay","Peruu","Filipiinid","Pitcairn","Poola","Portugal","Puerto Rico","Katar","Kongo Vabariik","Reunion","Rumeenia","Venemaa","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts ja Nevis","Saint Lucia","Saint Martin","Saint Pierre ja Miquelon","Saint Vincent ja Grenadiinid","Samoa","San Marino","Sao Tome ja Principe","Saudi Araabia","Senegal","Serbia","Serbia ja Montenegro","Seišellid","Sierra Leone","Singapur","Sint Maarten","Slovakkia","Sloveenia","Saalomoni Saared","Somaalia","Lõuna-Aafrika","Lõuna-Georgia ja Lõuna-Sandwichi saared","Lõuna-Korea","Lõuna-Sudaan","Hispaania","Sri Lanka","Sudaan, Suriname, Svalbard ja jaan. Mayen","Svaasimaa","Rootsi","Šveits","Süüria","Taiwan","Tadžikistan","Tansaania","Tai","Togo","Tokelau","Tonga","Trinidad ja Tobago","Tuneesia","Türgi","Türkmenistan","Turksi ja Caicose saared","Tuvalu","USA Neitsisaared","Uganda","Ukraina","Araabia Ühendemiraadid","Ühendkuningriik","Ameerika Ühendriigid","Ameerika Ühendriikide väikesed kõrvalsaared","Uruguay","Usbekistan","Vanuatu","Vatikan","Venezuela","Vietnam","Wales ja Futuna","Lääne-Sahara","Jeemen","Sambia","Zimbabwe"]; const state_local=["Hiiu maakond","Ida-Viru maakond","Jõgeva maakond","Järva maakond","Lääne maakond","Lääne-Viru maakond","Põlva maakond","Pärnu maakond","Rapla maakond","Saare maakond","Tartu maakond","Valga maakond","Viljandi maakond","Võru maakond"]; const state_en=["Harju County","Hiiu County","Ida-Viru County","Jõgeva County","Järva County","Lääne County","Lääne-Viru County","Põlva County","Pärnu County","Rapla County","Saare County","Tartu County","Valga County","Viljandi County","Võru County"]; const countries_en=["Afghanistan" ,"Aland Islands" ,"Albania" ,"Algeria" ,"American Samoa" ,"Andorra" ,"Angola" ,"Anguilla" ,"Antarctica" ,"Antigua and Barbuda" ,"Argentina" ,"Armenia" ,"Aruba" ,"Australia" ,"Austria" ,"Azerbaijan" ,"Bahamas" ,"Bahrain" ,"Bangladesh" ,"Barbados" ,"Belarus" ,"Belgium" ,"Belize" ,"Benin" ,"Bermuda" ,"Bhutan" ,"Bolivia" ,"Bonaire, Saint Eustatius and Saba" ,"Bosnia and Herzegovina" ,"Botswana" ,"Bouvet Island" ,"Brazil" ,"British Indian Ocean Territory" ,"British Virgin Islands" ,"Brunei" ,"Bulgaria" ,"Burkina Faso" ,"Burundi" ,"Cambodia" ,"Cameroon" ,"Canada" ,"Cape Verde" ,"Cayman Islands" ,"Central African Republic" ,"Chad" ,"Chile" ,"China" ,"Christmas Island" ,"Cocos Islands" ,"Colombia" ,"Comoros" ,"Cook Islands" ,"Costa Rica" ,"Croatia" ,"Cuba" ,"Curacao" ,"Cyprus" ,"Czech Republic" ,"Democratic Republic of the Congo" ,"Denmark" ,"Djibouti" ,"Dominica" ,"Dominican Republic" ,"East Timor" ,"Ecuador" ,"Egypt" ,"El Salvador" ,"Equatorial Guinea" ,"Eritrea" ,"Estonia" ,"Ethiopia" ,"Falkland Islands" ,"Faroe Islands" ,"Fiji" ,"Finland" ,"France" ,"French Guiana" ,"French Polynesia" ,"French Southern Territories" ,"Gabon" ,"Gambia" ,"Georgia" ,"Germany" ,"Ghana" ,"Gibraltar" ,"Greece" ,"Greenland" ,"Grenada" ,"Guadeloupe" ,"Guam" ,"Guatemala" ,"Guernsey" ,"Guinea" ,"Guinea-Bissau" ,"Guyana" ,"Haiti" ,"Heard Island and McDonald Islands" ,"Honduras" ,"Hong Kong" ,"Hungary" ,"Iceland" ,"India" ,"Indonesia" ,"Iran" ,"Iraq" ,"Ireland" ,"Isle of Man" ,"Israel" ,"Italy" ,"Ivory Coast" ,"Jamaica" ,"Japan" ,"Jersey" ,"Jordan" ,"Kazakhstan" ,"Kenya" ,"Kiribati" ,"Kosovo" ,"Kuwait" ,"Kyrgyzstan" ,"Laos" ,"Latvia" ,"Lebanon" ,"Lesotho" ,"Liberia" ,"Libya" ,"Liechtenstein" ,"Lithuania" ,"Luxembourg" ,"Macao" ,"Macedonia" ,"Madagascar" ,"Malawi" ,"Malaysia" ,"Maldives" ,"Mali" ,"Malta" ,"Marshall Islands" ,"Martinique" ,"Mauritania" ,"Mauritius" ,"Mayotte" ,"Mexico" ,"Micronesia" ,"Moldova" ,"Monaco" ,"Mongolia" ,"Montenegro" ,"Montserrat" ,"Morocco" ,"Mozambique" ,"Myanmar" ,"Namibia" ,"Nauru" ,"Nepal" ,"Netherlands" ,"Netherlands Antilles" ,"New Caledonia" ,"New Zealand" ,"Nicaragua" ,"Niger" ,"Nigeria" ,"Niue" ,"Norfolk Island" ,"North Korea" ,"Northern Mariana Islands" ,"Norway" ,"Oman" ,"Pakistan" ,"Palau" ,"Palestinian Territory" ,"Panama" ,"Papua New Guinea" ,"Paraguay" ,"Peru" ,"Philippines" ,"Pitcairn" ,"Poland" ,"Portugal" ,"Puerto Rico" ,"Qatar" ,"Republic of the Congo" ,"Reunion" ,"Romania" ,"Russia" ,"Rwanda" ,"Saint Barthelemy" ,"Saint Helena" ,"Saint Kitts and Nevis" ,"Saint Lucia" ,"Saint Martin" ,"Saint Pierre and Miquelon" ,"Saint Vincent and the Grenadines" ,"Samoa" ,"San Marino" ,"Sao Tome and Principe" ,"Saudi Arabia" ,"Senegal" ,"Serbia" ,"Serbia and Montenegro" ,"Seychelles" ,"Sierra Leone" ,"Singapore" ,"Sint Maarten" ,"Slovakia" ,"Slovenia" ,"Solomon Islands" ,"Somalia" ,"South Africa" ,"South Georgia and the South Sandwich Islands" ,"South Korea" ,"South Sudan" ,"Spain" ,"Sri Lanka" ,"Sudan" ,"Suriname" ,"Svalbard and Jan Mayen" ,"Swaziland" ,"Sweden" ,"Switzerland" ,"Syria" ,"Taiwan" ,"Tajikistan" ,"Tanzania" ,"Thailand" ,"Togo" ,"Tokelau" ,"Tonga" ,"Trinidad and Tobago" ,"Tunisia" ,"Turkey" ,"Turkmenistan" ,"Turks and Caicos Islands" ,"Tuvalu" ,"U.S. Virgin Islands" ,"Uganda" ,"Ukraine" ,"United Arab Emirates" ,"United Kingdom" ,"United States" ,"United States Minor Outlying Islands" ,"Uruguay" ,"Uzbekistan" ,"Vanuatu" ,"Vatican" ,"Venezuela" ,"Vietnam" ,"Wallis and Futuna" ,"Western Sahara" ,"Yemen" ,"Zambia" ,"Zimbabwe"]; 