function initialize() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: "roadmap",
  };
  // Display a map on the page
  map = new google.maps.Map(document.getElementById("map_tuts"), mapOptions);
  map.setTilt(45);
  // Multiple Markers
  var markers = [
    ["Koh Kradan", 7.31218, 99.257065],
    ["Whitehaven", -20.282677, 149.034912],
    ["Anakena ", -27.073, -109.322505],
    ["Camps Bay", -33.95, 18.3833],
    ["Cala Goloritze", 40.10805, 9.68979],
    ["Miami South", 25.782721, -80.140556],
    ["Gjipe", 40.127101, 19.670431],
    ["San Josef Bay", 50.6833, -128.2667],
    ["Boracay White Beach", 11.968603, 121.918381],
    ["Copacabana", -22.970722, -43.182365],
    ["Waikiki", 21.276218, -157.827091],
    ["Belle Mare Beach", -20.18808, 57.773133],
    ["Oludeniz Beach", 36.546964, 29.121703],
    ["Surfers Paradise Beach", -27.999244, 153.431457],
    ["Nha Trang Beach", 12.246644, 109.21716],
    ["Pink Beach", -8.601496, 119.5206],
    ["Navagio Beach", 37.859596, 20.624075],
    ["Ipanema Beach", -22.98694, -43.19747],
    ["Bottom Bay", 13.050078, -59.512908],
    ["Hyams Beach", -35.101807, 150.69345],
    ["Grace Bay Beach", 21.799456, -72.174057],
    ["Nihiwatu Beach", -9.7720795, 119.3682249],
    ["Anse Soleil", -4.7457, 55.465167],
    ["Diani Beach", -4.322222, 39.575001],
  ];
  // Info Window Content
  var infoWindowContent = [
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/01_Koh_Kradan_01.jpg">' +
        '<h6><a href="#!01-KohKradan">Koh Kradan Beach</a></h6>' +
        "<h6>Trang Province, Thailand</h6>" +
        '<span><b>Rating: 5.0<span class="fa fa-star checked"></span> 266 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Ko+Kradan,+Ko+Libong,+Kantang,+Trang,+Th%C3%A1i+Lan/@7.314398,98.9885573,11z/data=!4m18!1m8!3m7!1s0x304dde417a81863f:0xbaf10613aecd3f6d!2sKo+Kradan!3b1!8m2!3d7.314398!4d99.2522292!15sChBLb2ggS3JhZGFuIGJlYWNoWhIiEGtvaCBrcmFkYW4gYmVhY2iSAQZpc2xhbmSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnBNR0pZTkVKUkVBRQ!4m8!1m0!1m5!1m1!1s0x304dde417a81863f:0xbaf10613aecd3f6d!2m2!1d99.2522292!2d7.314398!3e4?hl=vi-VN">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/02_Whitehaven_01.jpg">' +
        '<h6><a href="#!02-Whitehaven">Whitehaven Beach</a></h6>' +
        "<h6>Whitsunday Island, Australia</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 322 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Whitehaven+Beach,+Whitsundays+Queensland+4802,+Australia/@-20.2734321,149.0399274,14z/data=!4m17!1m7!3m6!1s0x6bd8543936f3a3a1:0x808bfe71f86a4e1e!2sWhitehaven+Beach!3b1!8m2!3d-20.2824324!4d149.038854!4m8!1m0!1m5!1m1!1s0x6bd8543936f3a3a1:0x808bfe71f86a4e1e!2m2!1d149.038854!2d-20.2824324!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/03_Anakena_01.jpg">' +
        '<h6><a href="#!03-Anakena">Anakena Beach</a></h6>' +
        "<h6>Easter island, Chile</h6>" +
        '<span><b>Rating: 4.2<span class="fa fa-star checked"></span> 433 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Anakena,+%C4%90%E1%BA%A3o+Ph%E1%BB%A5c+Sinh,+Valpara%C3%ADso,+Chile/@-27.0644777,-109.342602,12z/data=!4m17!1m7!3m6!1s0x9947ee566006653b:0xd214068c8327f5b8!2sAnakena!3b1!8m2!3d-27.0739413!4d-109.322997!4m8!1m0!1m5!1m1!1s0x9947ee566006653b:0xd214068c8327f5b8!2m2!1d-109.322997!2d-27.0739413!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/04_Camps_Bay_01.jpg">' +
        '<h6><a href="#!04-CampsBay">Camps Bay</a></h6>' +
        "<h6>Cape Town, South Africa</h6>" +
        '<span><b>Rating: 3.9<span class="fa fa-star checked"></span> 186 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Camps+Bay,+K%E1%BA%BFp-tao,+8005,+Nam+Phi/@-33.9515357,18.3775621,15z/data=!4m17!1m7!3m6!1s0x1dcc67ad0e328c89:0xc7a0b241c4464b97!2sCamps+Bay,+K%E1%BA%BFp-tao,+8005,+Nam+Phi!3b1!8m2!3d-33.951298!4d18.3830983!4m8!1m0!1m5!1m1!1s0x1dcc67ad0e328c89:0xc7a0b241c4464b97!2m2!1d18.3830983!2d-33.951298!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/05_Cala_Goloritze_01.jpg">' +
        '<h6><a href="#!05-CalaGoloritze">Cala Goloritze Beach</a></h6>' +
        "<h6>Baunei, Sardinia, Italy</h6>" +
        '<span><b>Rating: 4.9<span class="fa fa-star checked"></span> 244 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Cala+Goloritz%C3%A9,+Italy/@40.1092982,9.6820618,15.5z/data=!4m17!1m7!3m6!1s0x12de5a57bb086adf:0xf82e71d83aa551d8!2sCala+Goloritz%C3%A9!3b1!8m2!3d40.1084992!4d9.6893168!4m8!1m0!1m5!1m1!1s0x12de5a57bb086adf:0xf82e71d83aa551d8!2m2!1d9.6893168!2d40.1084992!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/06_Miami_South_01.jpg">' +
        '<h6><a href="#!06-MiamiSouth">South Beach</a></h6>' +
        "<h6>Miami, Florida, USA</h6>" +
        '<span><b>Rating: 3.6 <span class="fa fa-star checked"></span> 381 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//South+Beach,+Miami+Beach,+Florida+33139,+Hoa+K%E1%BB%B3/@25.78185,-80.1352067,14z/data=!4m17!1m7!3m6!1s0x88d9b48e8bc080f1:0x7afeece4a9efe6bd!2sSouth+Beach,+Miami+Beach,+Florida+33139,+Hoa+K%E1%BB%B3!3b1!8m2!3d25.7826123!4d-80.1340772!4m8!1m0!1m5!1m1!1s0x88d9b48e8bc080f1:0x7afeece4a9efe6bd!2m2!1d-80.1340772!2d25.7826123!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/07_Gjipe_01.jpg">' +
        '<h6><a href="#!07-Gjipe">Gjipe Beach</a></h6>' +
        "<h6>Himare, Albania</h6>" +
        '<span><b>Rating: 4.3<span class="fa fa-star checked"></span> 274 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Gjipe+Beach,+Albania/@40.1270771,19.6707697,16.75z/data=!4m17!1m7!3m6!1s0x135b2eaf2f04db0b:0x402d26a0191d115!2sGjipe+Beach!3b1!8m2!3d40.1269522!4d19.6704407!4m8!1m0!1m5!1m1!1s0x135b2eaf2f04db0b:0x402d26a0191d115!2m2!1d19.6704407!2d40.1269522!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/08_San_Josef_Bay_01.jpg">' +
        '<h6><a href="#!08-SanJosefBay">San Josef Bay</a></h6>' +
        "<h6>British Columbia, Canada</h6>" +
        '<span><b>Rating: 4.6<span class="fa fa-star checked"></span> 189 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//San+Josef+Bay,+Columbia+thu%E1%BB%99c+Anh+V0N+1Z0,+Canada/@50.6825225,-128.26685,15z/data=!4m17!1m7!3m6!1s0x54641674c03ffcb1:0xf1e93baf9b304448!2sSan+Josef+Bay,+Columbia+thu%E1%BB%99c+Anh+V0N+1Z0,+Canada!3b1!8m2!3d50.682523!4d-128.26685!4m8!1m0!1m5!1m1!1s0x54641674c03ffcb1:0xf1e93baf9b304448!2m2!1d-128.26685!2d50.682523!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/09_White_Beach_01.jpg">' +
        '<h6><a href="#!09-WhiteBeach">White Beach</a></h6>' +
        "<h6>Boracay Island, Philippines</h6>" +
        '<span><b>Rating: 4.2 <span class="fa fa-star checked"></span> 276 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//White+Beach,+Boracay,+Aklan,+Philippines/@11.9524438,121.929614,15z/data=!4m17!1m7!3m6!1s0x33a53c22c3a8466b:0x443e5166ae9cf4b2!2sWhite+Beach!3b1!8m2!3d11.952444!4d121.929614!4m8!1m0!1m5!1m1!1s0x33a53c22c3a8466b:0x443e5166ae9cf4b2!2m2!1d121.929614!2d11.952444!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/10_Copacabana_01">' +
        '<h6><a href="#!10-Copacabana">Copacabana Beach</a></h6>' +
        "<h6>Rio de Janeiro, Brazil</h6>" +
        '<span><b>Rating: 4.8 <span class="fa fa-star checked"></span> 122 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Copacabana+Beach+-+Copacabana,+Rio+De+Janeiro+-+Rio+de+Janeiro,+Brazil/@-22.975649,-43.182016,15z/data=!4m17!1m7!3m6!1s0x9bd54579a5956b:0xa102deeaffcb3e3!2sCopacabana+Beach!3b1!8m2!3d-22.9738729!4d-43.18531!4m8!1m0!1m5!1m1!1s0x9bd54579a5956b:0xa102deeaffcb3e3!2m2!1d-43.18531!2d-22.9738729!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/11_Waikiki_01.jpg">' +
        '<h6><a href="#!11-Waikiki">Waikiki Beach</a></h6>' +
        "<h6>Honolulu, Hawaii, USA</h6>" +
        '<span><b>Rating: 4.8 <span class="fa fa-star checked"></span> 267 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Waikiki,+Honolulu,+Hawaii+96815,+Hoa+K%E1%BB%B3/@21.280131,-157.8326982,15z/data=!4m17!1m7!3m6!1s0x7c006df4e5c129af:0x4633ddc52a688878!2sWaikiki,+Honolulu,+Hawaii+96815,+Hoa+K%E1%BB%B3!3b1!8m2!3d21.2793462!4d-157.8291847!4m8!1m0!1m5!1m1!1s0x7c006df4e5c129af:0x4633ddc52a688878!2m2!1d-157.8291847!2d21.2793462!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/12_Belle_Mare_Beach_01.jpg">' +
        '<h6><a href="#!12-BelleMareBeach">Belle Mare Beach</a></h6>' +
        "<h6>Belle Mare, Mauritius</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 236 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Belle+Mare+beach+map/@-3.5988385,42.4253482,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x217cfb8478fbe69b:0xbe22e5eb9d0dcc78!2m2!1d57.7741688!2d-20.1826764">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/13_Oludeniz_Beach_01.jpg">' +
        '<h6><a href="#!13-OludenizBeach">Oludeniz Beach Beach</a></h6>' +
        "<h6>Mugla, Turkey</h6>" +
        '<span><b>Rating: 4.9<span class="fa fa-star checked"></span> 186 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Oludeniz+Beach/@19.0090556,29.6325676,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14c040a6a8a0efd9:0xdba05aed33b8aefd!2m2!1d29.1217788!2d36.5465846">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/14_Surfers_Paradise_Beach_01.jpg">' +
        '<h6><a href="#!14-SurfersParadiseBeach">Surfers Paradise Beach</a></h6>' +
        "<h6>Queensland, Australia</h6>" +
        '<span><b>Rating: 4.9<span class="fa fa-star checked"></span> 296 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Surfers+Paradise+Beach/@-6.6348372,90.4176402,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x6b91057374bb8237:0x67437f8b978317a9!2m2!1d153.4314575!2d-27.9992435">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/15_Nha_Trang_Beach_01.jpg">' +
        '<h6><a href="#!15-NhaTrangBeach">Nha Trang Beach</a></h6>' +
        "<h6>Khanh Hoa, Viet Nam</h6>" +
        '<span><b>Rating: 4.4<span class="fa fa-star checked"></span> 276 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Nha+Trang+Beach+map/@11.5315275,107.3575493,9z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x31706770f4958433:0xf09b18bfbf27bde7!2m2!1d109.1978532!2d12.2363391!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/16_Pink_Beach_01.jpg">' +
        '<h6><a href="#!16-PinkBeach">Pink Beach</a></h6>' +
        "<h6>Nusa Tenggara Timur, Indonesia</h6>" +
        '<span><b>Rating: 4.6<span class="fa fa-star checked"></span> 376 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Pink+Beach,+%C4%90%C3%B4ng+Nusa+Tenggara,+Indonesia/@-8.7401133,118.9960575,9z/data=!4m18!1m8!3m7!1s0x2db4567cf6bd1967:0x9f2eb4aca51c5fd0!2sPink+Beach!3b1!8m2!3d-8.6012197!4d119.5197487!15sChRQaW5rIEJlYWNoIGluZG9uZXNpYZIBBWJlYWNo!4m8!1m0!1m5!1m1!1s0x2db4567cf6bd1967:0x9f2eb4aca51c5fd0!2m2!1d119.5197902!2d-8.6012033!3e4?hl=vi-VN">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/17_Navagio_Beach_01.jpg">' +
        '<h6><a href="#!17-NavagioBeach">Navagio Beach</a></h6>' +
        "<h6>Zakynthos, Greece</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Navagio,+Hy+L%E1%BA%A1p/@37.8595769,20.6248109,17z/data=!4m17!1m7!3m6!1s0x13676b8cc2540ae1:0x783ee88b75588aee!2sNavagio!3b1!8m2!3d37.8594645!4d20.6249001!4m8!1m0!1m5!1m1!1s0x13676b8cc2540ae1:0x783ee88b75588aee!2m2!1d20.6249001!2d37.8594645!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/18_Ipanema_Beach_01.jpg">' +
        '<h6><a href="#!18-IpanemaBeach">Ipanema Beach</a></h6>' +
        "<h6>Rio de Janeiro, Brazil</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Ipanema+Beach/@-0.3897707,-54.6207213,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9bd50124462bc9:0x297084a82551b8e4!2m2!1d-43.2047975!2d-22.987064">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/19_Bottom_Bay_01.jpg">' +
        '<h6><a href="#!19-BottomBay">Bottom Bay</a></h6>' +
        "<h6>Christ Church, Barbados</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Bottom+Bay,+Barbados/@13.1362354,-59.4249439,17z/data=!4m17!1m7!3m6!1s0x8c438c560e661f1d:0x838a9e431eb33605!2sBottom+Bay!3b1!8m2!3d13.1362038!4d-59.4250546!4m8!1m0!1m5!1m1!1s0x8c438c560e661f1d:0x838a9e431eb33605!2m2!1d-59.4250546!2d13.1362038!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/20_Hyams_Beach_01.jpg">' +
        '<h6><a href="#!20-HyamsBeach">Hyams Beach</a></h6>' +
        "<h6>New South Wales, Australia</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Hyams+Beach+New+South+Wales+2540,+%C3%9Ac/@-35.1078501,150.6868869,14z/data=!4m17!1m7!3m6!1s0x6b148eb5e92334cd:0x40609b49043d6b0!2sHyams+Beach+New+South+Wales+2540,+%C3%9Ac!3b1!8m2!3d-35.1017041!4d150.6922288!4m8!1m0!1m5!1m1!1s0x6b148eb5e92334cd:0x40609b49043d6b0!2m2!1d150.6922288!2d-35.1017041!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/21_Grace_Bay_01.jpg">' +
        '<h6><a href="#!21-GraceBayBeach">Grace Bay Beach</a></h6>' +
        "<h6>Turks and Caicos island, England</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Grace+Bay+Beach/@1.0334376,-69.233504,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x894b4f97e3e25cbb:0xcf05e228e2c20c30!2m2!1d-72.1760505!2d21.7980019">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/22_Nihiwatu_Beach_01.jpg">' +
        '<h6><a href="#!22-NihiwatuBeach">Nihiwatu Beach</a></h6>' +
        "<h6>East Nusa Tenggara, Indonesia</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir//Nihiwatu+Beach,+%C4%90%C3%B4ng+Nusa+Tenggara,+Indonesia/@-9.7727717,119.3659356,16z/data=!4m17!1m7!3m6!1s0x2c4afcdc01f97a73:0x54c747e3fc22ac63!2sNihiwatu+Beach!3b1!8m2!3d-9.7720795!4d119.3682249!4m8!1m0!1m5!1m1!1s0x2c4afcdc01f97a73:0x54c747e3fc22ac63!2m2!1d119.3682249!2d-9.7720795!3e4">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/23_Anse_Soleil_01.jpg">' +
        '<h6><a href="#!23-AnseSoleil">Anse Soleil Beach</a></h6>' +
        "<h6>Mahe Island, Seychelles</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Anse+Soleil+Beach/@2.3355204,41.2305388,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x22e1d515ad9990a1:0x62834e982974cba0!2m2!1d55.4655793!2d-4.7455939">Get directions</a></p>' +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<img width="180" height="100" src="images/24_Diani_Beach_01.jpg">' +
        '<h6><a href="#!24-DianiBeach">Diani Beach</a></h6>' +
        "<h6>Easter island, Chile</h6>" +
        '<span><b>Rating: 4.5<span class="fa fa-star checked"></span> 350 Reviews</b></span>' +
        '<p></br><a href="https://www.google.com/maps/dir/10.825103,106.6409201/Diani+Beach/@2.5148018,33.2998175,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1840463f2a0b107d:0xafa0063ab0f439ad!2m2!1d39.5946958!2d-4.2797626">Get directions</a></p>' +
        "</div>",
    ],
  ];
  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;
  // Loop through our array of markers & place each one on the map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0],
    });
    // Each marker to have an info window
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
  }
  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener(
    map,
    "bounds_changed",
    function (event) {
      this.setZoom(2);
      google.maps.event.removeListener(boundsListener);
    }
  );
}

app.controller("whereCtrl", function ($scope, $http) {
  function getData() {
    $http.get("./json/beaches.json").then(function (rspt) {
      if (sessionStorage.getItem("sessionBeaches") == null) {
        sessionStorage.setItem(
          "sessionBeaches",
          JSON.stringify(rspt.data.beaches)
        );
        $scope.beachList = JSON.parse(sessionStorage.getItem("sessionBeaches"));
      } else {
        $scope.beachList = JSON.parse(sessionStorage.getItem("sessionBeaches"));
      }
    });
  }
  getData();
  function mapInit() {
    var script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
  }
  mapInit();
  $scope.searchRegion = {};
  $scope.filterByRegion = function (region) {
    $scope.searchRegion = region;
  };
  $scope.filterByRegion();

   //Hide or show map
   $scope.IsVisible = false;
   $scope.btnmap="Show map";
   $scope.ShowHide = function () {       
       if($scope.IsVisible){
        $scope.IsVisible = false;
        $scope.btnmap="Show map"
       }
       else{
        $scope.IsVisible = true;
        $scope.btnmap="Hide map";
       }       
   }

   //Display price description 
       $scope.myPrice = [
      { id: 1, name: "Extra Economical" },
      { id: 2, name: "Economical" },
      { id: 3, name: "Affordable" },
      { id: 4, name: "Quite Expensive" },
      { id: 5, name: "Expensive" },
    ];
    $scope.priceDesc = function (val) {
      for (var i = 0; i < $scope.myPrice.length; i++) {
        if ($scope.myPrice[i].id === $scope.onlyDigits(val)) {
          return $scope.myPrice[i].name;
        }
      }
    };

});
