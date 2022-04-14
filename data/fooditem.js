  // เมนูอาหารจานหลัก

  const maincourse = [{
      // 1
      row1column1: "สเต๊กเนื้อ",
      row1column2: "สปาเกตตี",
      row1column3: "ซี่โครงหมู",
  }, {
      //2
      row2column1: "สเต็กปลาทอด",
      row2column2: "เฟรนฟราย",
      row2column3: "ล็อบสเตอร์",
  }, {
      //3
      row3column1: "สตูว์เนื้อ",
      row3column2: "แซนด์วิช",
      row3column3: "บะหมี่",
  }, {
      //4
      row4column1: "หอยแมลงภู่",
      row4column2: "ไก่ทอด",
      row4column3: "สลัดผัก",
  }];




  rc = () => {

      //   get

      let r1c1 = document.querySelector('#r1c1');
      let r1c2 = document.querySelector('#r1c2');
      let r1c3 = document.querySelector('#r1c3');

      let r2c1 = document.querySelector('#r2c1');
      let r2c2 = document.querySelector('#r2c2');
      let r2c3 = document.querySelector('#r2c3');

      let r3c1 = document.querySelector('#r3c1');
      let r3c2 = document.querySelector('#r3c2');
      let r3c3 = document.querySelector('#r3c3');

      let r4c1 = document.querySelector('#r4c1');
      let r4c2 = document.querySelector('#r4c2');
      let r4c3 = document.querySelector('#r4c3');


      r1c1.innerHTML = maincourse[0].row1column1;
      r1c2.innerHTML = maincourse[0].row1column2;
      r1c3.innerHTML = maincourse[0].row1column3;

      r2c1.innerHTML = maincourse[1].row2column1;
      r2c2.innerHTML = maincourse[1].row2column2;
      r2c3.innerHTML = maincourse[1].row2column3;

      r3c1.innerHTML = maincourse[2].row3column1;
      r3c2.innerHTML = maincourse[2].row3column2;
      r3c3.innerHTML = maincourse[2].row3column3;

      r4c1.innerHTML = maincourse[3].row4column1;
      r4c2.innerHTML = maincourse[3].row4column2;
      r4c3.innerHTML = maincourse[3].row4column3;

  }

  rc();


  //  ราคาอาหารจานหลัก

  const mainprice = [{
      //1
      blockrow1column1: "$" + 59,
      blockrow1column2: "$" + 23,
      blockrow1column3: "$" + 160,
  }, {
      //2
      blockrow2column1: "$" + 70,
      blockrow2column2: "$" + 13,
      blockrow2column3: "$" + 319,
  }, {
      //3
      blockrow3column1: "$" + 40,
      blockrow3column2: "$" + 6,
      blockrow3column3: "$" + 13,
  }, {
      //4
      blockrow4column1: "$" + 98.2,
      blockrow4column2: "$" + 6,
      blockrow4column3: "$" + 21,
  }];




  blockcr = () => {

      //   get 

      var blockc1r1 = document.querySelector('#blockc1r1');
      var blockc1r2 = document.querySelector('#blockc1r2');
      var blockc1r3 = document.querySelector('#blockc1r3');

      var blockc2r1 = document.querySelector('#blockc2r1');
      var blockc2r2 = document.querySelector('#blockc2r2');
      var blockc2r3 = document.querySelector('#blockc2r3');

      var blockc3r1 = document.querySelector('#blockc3r1');
      var blockc3r2 = document.querySelector('#blockc3r2');
      var blockc3r3 = document.querySelector('#blockc3r3');

      var blockc4r1 = document.querySelector('#blockc4r1');
      var blockc4r2 = document.querySelector('#blockc4r2');
      var blockc4r3 = document.querySelector('#blockc4r3');



      blockc1r1.innerHTML = mainprice[0].blockrow1column1;
      blockc1r2.innerHTML = mainprice[0].blockrow1column2;
      blockc1r3.innerHTML = mainprice[0].blockrow1column3;

      blockc2r1.innerHTML = mainprice[1].blockrow2column1;
      blockc2r2.innerHTML = mainprice[1].blockrow2column2;
      blockc2r3.innerHTML = mainprice[1].blockrow2column3;

      blockc3r1.innerHTML = mainprice[2].blockrow3column1;
      blockc3r2.innerHTML = mainprice[2].blockrow3column2;
      blockc3r3.innerHTML = mainprice[2].blockrow3column3;

      blockc4r1.innerHTML = mainprice[3].blockrow4column1;
      blockc4r2.innerHTML = mainprice[3].blockrow4column2;
      blockc4r3.innerHTML = mainprice[3].blockrow4column3;

  };


  blockcr();


  //   เครื่องดื่ม

  const drink = ["1.) นม", "2.) กาแฟ", "3.) ชา", "4.) โกโก้", "5.) น้ำผลไม้", "6.) เครื่องดื่มสมุนไพร", "7.) น้ำหวาน", "8.) เครื่องดื่มอัดแก๊สคาร์บอนไดออกไซด์", "9.) ไวน์", "10.) เบียร์", "11.) เหล้า", "12.) บรั่นดี", "13.) วิสกี้", "14.) วอดก้า"];
  const drinkprice = [3, 5, 5, 2.4, 7, 16.40, 2, 37.8, 42, 31, 129, 38, 94, 107];


  drinkshow = () => {

      // get

      let d1 = document.querySelector('#d1');
      let d2 = document.querySelector('#d2');
      let d3 = document.querySelector('#d3');

      let d4 = document.querySelector('#d4');
      let d5 = document.querySelector('#d5');
      let d6 = document.querySelector('#d6');

      let d7 = document.querySelector('#d7');
      let d8 = document.querySelector('#d8');
      let d9 = document.querySelector('#d9');

      let d10 = document.querySelector('#d10');
      let d11 = document.querySelector('#d11');
      let d12 = document.querySelector('#d12');
      let d13 = document.querySelector('#d13');

      let d14 = document.querySelector('#d14');


      d1.innerHTML = drink[0];
      d2.innerHTML = drink[1];
      d3.innerHTML = drink[2];
      d4.innerHTML = drink[3];

      d5.innerHTML = drink[4];
      d6.innerHTML = drink[5];
      d7.innerHTML = drink[6];

      d8.innerHTML = drink[7];
      d9.innerHTML = drink[8];
      d10.innerHTML = drink[9];

      d11.innerHTML = drink[10];
      d12.innerHTML = drink[11];
      d13.innerHTML = drink[12];

      d14.innerHTML = drink[13];

  };


  drinkshow();


  drinkpriceshow = () => {

      // get

      let dp1 = document.querySelector('#dp1');
      let dp2 = document.querySelector('#dp2');
      let dp3 = document.querySelector('#dp3');

      let dp4 = document.querySelector('#dp4');
      let dp5 = document.querySelector('#dp5');
      let dp6 = document.querySelector('#dp6');

      let dp7 = document.querySelector('#dp7');
      let dp8 = document.querySelector('#dp8');
      let dp9 = document.querySelector('#dp9');

      let dp10 = document.querySelector('#dp10');
      let dp11 = document.querySelector('#dp11');
      let dp12 = document.querySelector('#dp12');

      let dp13 = document.querySelector('#dp13');
      let dp14 = document.querySelector('#dp14');



      dp1.innerHTML = "$" + drinkprice[0];
      dp2.innerHTML = "$" + drinkprice[1];
      dp3.innerHTML = "$" + drinkprice[2];

      dp4.innerHTML = "$" + drinkprice[3];
      dp5.innerHTML = "$" + drinkprice[4];
      dp6.innerHTML = "$" + drinkprice[5];

      dp7.innerHTML = "$" + drinkprice[6];
      dp8.innerHTML = "$" + drinkprice[7];
      dp9.innerHTML = "$" + drinkprice[8];

      dp10.innerHTML = "$" + drinkprice[9];
      dp11.innerHTML = "$" + drinkprice[10];
      dp12.innerHTML = "$" + drinkprice[11];

      dp13.innerHTML = "$" + drinkprice[12];
      dp14.innerHTML = "$" + drinkprice[13];

  };

  drinkpriceshow();








  //   ของหวาน


  const dessert = ["1.) ฮันนี่โทสต์มะม่วง", "2.) แพนเค้กราสป์เบอร์รี", "3.) แพนเค้กกล้วยหอม", "4.) แพนเค้กเรด เวลเว็ท", "5.) วาฟเฟิลไอศกรีม", "6.) วา ชีสพายมะนาวฟเฟิลชาเขียว", "7.) ช็อกโกแลตลาวา", "8.) พุดดิ้งขนมปัง", "9.) ครีมบูเล่เสาวรส", "10.) ครีมบูเล่มะพร้าว", "11.) เฟรนช์โทสต์สตรอว์เบอร์รี", "12.) มูสเค้กช็อกโกแลต", "13.) ชีสพายชาเขียว", "14.) ชีสพายมะนาว"];
  const dessertprice = [10, 12.1, 7, 23, 12, 44, 15, 36, 79.1, 152, 43, 64.32, 23];



  dessertshow = () => {


      //   get 

      let de1 = document.querySelector('#de1');
      let de2 = document.querySelector('#de2');
      let de3 = document.querySelector('#de3');

      let de4 = document.querySelector('#de4');
      let de5 = document.querySelector('#de5');
      let de6 = document.querySelector('#de6');

      let de7 = document.querySelector('#de7');
      let de8 = document.querySelector('#de8');
      let de9 = document.querySelector('#de9');

      let de10 = document.querySelector('#de10');
      let de11 = document.querySelector('#de11');
      let de12 = document.querySelector('#de12');

      let de13 = document.querySelector('#de13');
      let de14 = document.querySelector('#de14');



      de1.innerHTML = dessert[0];
      de2.innerHTML = dessert[1];
      de3.innerHTML = dessert[2];

      de4.innerHTML = dessert[3];
      de5.innerHTML = dessert[4];
      de6.innerHTML = dessert[5];

      de7.innerHTML = dessert[6];
      de8.innerHTML = dessert[7];
      de9.innerHTML = dessert[8];

      de10.innerHTML = dessert[9];
      de11.innerHTML = dessert[10];
      de12.innerHTML = dessert[11];

      de13.innerHTML = dessert[12];
      de14.innerHTML = dessert[13];

  };



  dessertshow();


  dessertpriceshow = () => {

      // get 

      let dep1 = document.querySelector('#dep1');
      let dep2 = document.querySelector('#dep2');
      let dep3 = document.querySelector('#dep3');

      let dep4 = document.querySelector('#dep4');
      let dep5 = document.querySelector('#dep5');
      let dep6 = document.querySelector('#dep6');

      let dep7 = document.querySelector('#dep7');
      let dep8 = document.querySelector('#dep8');
      let dep9 = document.querySelector('#dep9');

      let dep10 = document.querySelector('#dep10');
      let dep11 = document.querySelector('#dep11');
      let dep12 = document.querySelector('#dep12');

      let dep13 = document.querySelector('#dep13');
      let dep14 = document.querySelector('#dep14');


      dep1.innerHTML = "$" + dessertprice[0];
      dep2.innerHTML = "$" + dessertprice[1];
      dep3.innerHTML = "$" + dessertprice[2];

      dep4.innerHTML = "$" + dessertprice[3];
      dep5.innerHTML = "$" + dessertprice[4];
      dep6.innerHTML = "$" + dessertprice[5];

      dep7.innerHTML = "$" + dessertprice[6];
      dep8.innerHTML = "$" + dessertprice[7];
      dep9.innerHTML = "$" + dessertprice[8];

      dep10.innerHTML = "$" + dessertprice[9];
      dep11.innerHTML = "$" + dessertprice[10];
      dep12.innerHTML = "$" + dessertprice[11];

      dep13.innerHTML = "$" + dessertprice[12];
      dep14.innerHTML = "$" + dessertprice[12];

  };



  dessertpriceshow();


  //   export { rc, blockcr, drinkshow, drinkpriceshow, dessertshow, dessertpriceshow }