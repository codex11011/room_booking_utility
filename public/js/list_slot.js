var Book = require("../../models/book");

let lh;
let Day;
let id;
<<<<<<< HEAD
let bookid;
let intersect;

function gentime(h1, m1, h2, m2, d) {
  max_range = (h2 - h1) * 60 + (m2 - m1);
  dr = d * 60;
=======


function gentime(h1, m1, h2, m2, d) {
  max_range = ((h2) - (h1)) * 60 + ((m2) - (m1));
  dr = (d) * 60;
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
  arr = [];
  t_sum = 0;
  while (t_sum + dr <= max_range) {
    arr.push(h1 + t_sum / 60);
    t_sum = t_sum + 30;
  }
  // console.log(arr);
  return arr;
}

function IsFloat(n) {
  return parseInt(n) !== n;
}

async function print_time(x) {
  let arr_1 = [];
  let dur = 0.5;
  for (k = 0; k < x.length; k++) {
    let arr_2 = [];
    for (l = 0; l < x[k].length; l++) {
      let arr_3 = [];
<<<<<<< HEAD
      //console.log(dur + "------->");
=======
      console.log(dur + "------->");
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
      for (m = 0; m < x[k][l].length; m++) {
        y = IsFloat(x[k][l][m]);
        a = parseInt(x[k][l][m]);
        b = x[k][l][m] - Math.floor(x[k][l][m]);
        c = parseInt(dur);
        d = dur - Math.floor(dur);
        var newBook = {};
        if (y === true) {
<<<<<<< HEAD
          let strttime = a + ":" + b * 60;
          let endtime;
          if (b + d === 0.5) {
            endtime = a + c + ":" + (b + d) * 60;
            newBook = {
              day: Day,
              strttime: strttime,
              endtime: endtime,
              lt: lh,
              ask: id,
              book_id: bookid,
              intersect: intersect
            };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err) console.log(err);
             // else //console.log("done");
              // res.redirect("/profile/new");
            });
            // console.log(
            //   a + ":" + b * 60 + " <------> " + (a + c) + ":" + (b + d) * 60
            // );
          } else if (b + d === 1) {
            endtime = a + c + 1 + ":00";
            newBook = {
              day: Day,
              strttime: strttime,
              endtime: endtime,
              lt: lh,
              ask: id,
              book_id: bookid,
              intersect: intersect
            };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err) console.log(err);
              //else //console.log("done");
              // res.redirect("/profile/new");
            });
            //console.log(a + ":" + b * 60 + " <------> " + (a + c + 1) + ":00");
=======
          let strttime = (a + ":" + b * 60);
          let endtime;
          if ((b + d) === 0.5) {
            endtime = ((a + c) + ":" + (b + d) * 60);
            newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err)
                console.log(err);
              else
                console.log("done")
              // res.redirect("/profile/new");
            });
            console.log(a + ":" + b * 60 + " <------> " + (a + c) + ":" + (b + d) * 60);
          } else if (b + d === 1) {
            endtime = ((a + c + 1) + ":00");
            newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err)
                console.log(err);
              else
                console.log("done")
              // res.redirect("/profile/new");
            });
            console.log(a + ":" + b * 60 + " <------> " + (a + c + 1) + ":00")
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
          }
          // newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };

          arr_3.push(a + ":" + b * 60);
        } else {
<<<<<<< HEAD
          let strttime = x[k][l][m] + ":00";
          let endtime;

          if (d + b === 0.5) {
            endtime = x[k][l][m] + c + ":" + (b + d) * 60;
            newBook = {
              day: Day,
              strttime: strttime,
              endtime: endtime,
              lt: lh,
              ask: id,
              book_id: bookid,
              intersect: intersect
            };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err) console.log(err);
              //else //console.log("done");
              // res.redirect("/profile/new");
            });
            
          } else if (b + d === 0) {
            endtime = x[k][l][m] + c + ":00";
            newBook = {
              day: Day,
              strttime: strttime,
              endtime: endtime,
              lt: lh,
              ask: id,
              book_id: bookid,
              intersect: intersect
            };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err) console.log(err);
              //else console.log("done");
              // res.redirect("/profile/new");
            });
            // console.log(
            //   x[k][l][m] + ":00" + " <------> " + (x[k][l][m] + c) + ":00"
            // );
          }
          // newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };
          arr_3.push(x[k][l][m] + ":00");
=======
          let strttime = (x[k][l][m] + ":00");
          let endtime;

          if (d + b === 0.5) {
            endtime = ((x[k][l][m] + c) + ":" + (b + d) * 60);
            newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err)
                console.log(err);
              else
                console.log("done")
              // res.redirect("/profile/new");
            });
            console.log(x[k][l][m] + ":00" + " <------> " + (x[k][l][m] + c) + ":" + (b + d) * 60);
          } else if (b + d === 0) {
            endtime = ((x[k][l][m] + c) + ":00");
            newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };
            booking = new Book(newBook);
            await booking.save((err, Book) => {
              if (err)
                console.log(err);
              else
                console.log("done")
              // res.redirect("/profile/new");
            });
            console.log(x[k][l][m] + ":00" + " <------> " + (x[k][l][m] + c) + ":00");
          }
          // newBook = { day: Day, strttime: strttime, endtime: endtime, lt: lh, ask: id };
          arr_3.push(x[k][l][m] + ":00")
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
        }
        // booking = await new Book(newBook);
        // await booking.save((err, Book) => {
        //   if (err)
        //     console.log(err);
        //   else
        //     console.log("done")
        //   // res.redirect("/profile/new");
        // });
<<<<<<< HEAD
=======

>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
      }
      dur += 0.5;
      arr_2.push(arr_3);
    }
    arr_1.push(arr_2);
  }
<<<<<<< HEAD
}

// [12, 00, 14, 30], [15, 00, 18, 30]
async function multi_time(t, lt, day, ask, book_id, res, inter) {
=======

}

// [12, 00, 14, 30], [15, 00, 18, 30]
async function multi_time(t, lt, day, ask, res) {
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
  let arr_t = [];
  p_time = t.map(e => parseInt(e));
  lh = lt;
  Day = day;
  id = ask;
<<<<<<< HEAD
  intersect = inter;
  bookid = book_id;
=======
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
  arr_t.push(p_time);
  let dur_ar = [0.5, 1, 1.5, 2];
  for (let i = 0; i < arr_t.length; i++) {
    let all_slots = [];
    let slot_arr = [];
    for (let k = 0; k < dur_ar.length; k++) {
<<<<<<< HEAD
      x = await gentime(
        arr_t[i][0],
        arr_t[i][1],
        arr_t[i][2],
        arr_t[i][3],
        dur_ar[k]
      );
=======
      x = await gentime(arr_t[i][0], arr_t[i][1], arr_t[i][2], arr_t[i][3], dur_ar[k]);
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
      slot_arr.push(x);
    }
    all_slots.push(slot_arr);
    await print_time(all_slots);
  }
  res.redirect("/profile");
}

// multi_time();

<<<<<<< HEAD
module.exports = multi_time;
=======
module.exports = multi_time;
>>>>>>> 3d1ea1508f56dc1e9d3367a8a10f3727d8569350
