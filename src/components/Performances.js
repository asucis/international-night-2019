import React from "react";

const Performances = () => {
  const performances = [
    {
      group: "Introduction by MCs",
      genre: "",
      name: "",
      time: "6:30 - 6:33",
    },
    {
      group: "Gye -nyame Morale Squad",
      genre: "Morale(song+dance)",
      name: "",
      time: "6:35 - 6:45",
    },
    {
      group: "Bip ",
      genre: "Song",
      name: "Drums ",
      time: "6:47 - 6:55",
    },
    {
      group: "Devilettes Dance Team",
      genre: "Dance",
      name: "",
      time: "6:57 - 7:02",
    },
    {
      group: "CSSA",
      genre: "Song",
      name: "When I’m Gone (english) ",
      time: "7:04 - 7:08",
    },
    {
      group: "KOdE",
      genre: "Dance",
      name: "",
      time: "7:10 - 7:17",
    },
    {
      group: "VNL",
      genre: "Song",
      name: "English/Arabic/Armenian Song",
      time: "7:19 - 7:25",
    },
    {
      group: "Daniel Oh",
      genre: "Rap song",
      name: "Please",
      time: "7:27 - 7:30",
    },
    {
      group: "Interlude by MCs",
      genre: "",
      name: "",
      time: "7:32 - 7:37",
    },
    {
      group: "Phantom Team",
      genre: "Dance",
      name: "",
      time: "7:39 - 7:43",
    },
    {
      group: "VNL",
      genre: "Song",
      name: "Je t’aime (I love you)",
      time: "7:45 - 7:48",
    },
    {
      group: "CSSA",
      genre: "Dance",
      name: "Flowers of War",
      time: "7:51 - 7:53",
    },
    {
      group: "Osei",
      genre: "Song",
      name: "Wish Me Well",
      time: "7:55 - 7:59",
    },
    {
      group: "Prachi",
      genre: "Dance",
      name: "",
      time: "8:01 - 8:06",
    },
    {
      group: "Azna Dance",
      genre: "Dance",
      name: "",
      time: "8:08 - 8:12",
    },
    {
      group: "CSSA",
      genre: "Song",
      name: "The Wall (chinese)",
      time: "8:14 - 8:18",
    },
    {
      group: "Interlude by MCs",
      genre: "",
      name: "",
      time: "8:20 - 8:25",
    },
    {
      group: "Xinyue Le",
      genre: "Song",
      name: "Peking opera ",
      time: "8:27 - 8:32",
    },
    {
      group: "Dynamic Movement",
      genre: "Dance",
      name: "Tricking sport",
      time: "8:34 - 8:36",
    },
    {
      group: "Fun-Fun student organization",
      genre: "Song ",
      name: "Wo Kong",
      time: "8:38 - 8:43",
    },
    {
      group: "Dabke United",
      genre: "Dance",
      name: "",
      time: "8:45 - 8:49",
    },
    {
      group: "Perfume Girls",
      genre: "Dance",
      name: "",
      time: "8:51 - 8:56",
    },
    {
      group: "Semi acoustic guitar - Mirza ",
      genre: "Song",
      name: "",
      time: "8:58 - 9:02 ",
    },
    {
      group: "CSSA",
      genre: "Dance",
      name: "North of China",
      time: "9:04 - 9:07",
    },
    {
      group: "Interlude by MCs",
      genre: "",
      name: "",
      time: "9:09 - 9:14",
    },
    {
      group: "Yurika Jain",
      genre: "Dance",
      name: "",
      time: "9:16 - 9:23",
    },
    {
      group: "Daniel Oh",
      genre: "Song",
      name: "On it",
      time: "9:25 - 9:29",
    },
    {
      group: "Andaaz",
      genre: "Dance",
      name: "",
      time: "9:31 - 9:35",
    },
    {
      group: "Gye -nyame Morale Squad",
      genre: "Morale(song+dance)",
      name: "",
      time: "9:37 - 9:52",
    },
    {
      group: "CSSA",
      genre: "Dance",
      name: "Made in China",
      time: "9:54 - 9:59",
    },
    {
      group: "Osei",
      genre: "Song",
      name: "All of Me",
      time: "10:01 - 10:06",
    },
    {
      group: "Closing by MCs",
      genre: "",
      name: "",
      time: "10:08 - 10:11",
    },
  ];

  return (
    <>
      <table>
        <caption>Performances</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Genre</th>
            <th scope="col">Group</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {performances.map(performance => (
            <tr>
              <td data-label="Time">{performance.time}</td>
              <td data-label="Genre">{performance.genre}</td>
              <td data-label="Group">
                {performance.genre === "" ? (
                  <b>{performance.group}</b>
                ) : (
                  performance.group
                )}
              </td>
              <td data-label="Name">{performance.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Performances;
