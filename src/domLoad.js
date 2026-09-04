const container = document.querySelector(".container");

const sidebar = document.createElement("div");
const dashboard = document.createElement("div");
const header = document.createElement("div");
const article = document.createElement("div");
const linkList = document.createElement("ul");

sidebar.setAttribute("class", "sidebar");
dashboard.setAttribute("class", "dashboard");
header.setAttribute("class", "header");
article.setAttribute("class", "article");

//   <div class="article">
//     <div class="article-projects">
//       <span>Your Projects </span>
//     </div>
//     <div class="article-announcement">
//       <span>Announcements</span>
//     </div>

//     <div class="card">
//       <p>
//         <text class="headings">Super Cool Projects</text><br />
//         Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem ipsome
//         text Lorem ipsome.
//       </p>
//     </div>
//     <div class="card">
//       <p>
//         <text class="headings">Less Cool Projects</text><br />
//         Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem ipsome
//         text Lorem ipsom
//       </p>
//     </div>

//     <div class="big-card-wrapper">
//       <div class="big-card">
//         <ul>
//           <li>
//             <p>
//               <text class="headings">Site Maintenance</text><br />
//               Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem
//               ipsome text Lorem ipsome.
//             </p>
//           </li>
//           <hr />
//           <li>
//             <p>
//               <text class="headings">Community Share Day</text><br />
//               Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem
//             </p>
//           </li>
//           <hr />
//           <li>
//             <p>
//               <text class="headings">Updated privacy Policy</text><br />
//               Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem
//               ipsome text Lorem ipsome.
//             </p>
//           </li>
//         </ul>
//       </div>
//       <span class="trending">Trending</span>
//       <div id="big-card-avatar" class="big-card">
//         <ul>
//           <li>
//             <div class="trending-avatar-names">
//               <img id="some" class="avatars" src="./avatars/tegan.png" />
//               <p id="trending-avatar-names-header">@tegan</p>
//               <p>World Peace Builder</p>
//             </div>
//           </li>
//           <li>
//             <div class="trending-avatar-names">
//               <img class="avatars" src="./avatars/morgan.png" />
//               <p id="trending-avatar-names-header">@morgan</p>
//               <p>Super Cool Project</p>
//             </div>
//           </li>
//           <li>
//             <div class="trending-avatar-names">
//               <img class="avatars" src="./avatars/ken.png" />
//               <p id="trending-avatar-names-header">@ken</p>
//               <p>Life Changing App</p>
//             </div>
//           </li>
//           <li>
//             <div class="trending-avatar-names">
//               <img class="avatars" src="./avatars/alex.png" />
//               <p id="trending-avatar-names-header">@alex</p>
//               <p>No Traffic Maker</p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>

//     <div class="card">
//       <p>
//         <text class="headings">Impossible App</text><br />
//         Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem ipsome
//         text Lorem ipsom
//       </p>
//     </div>

//     <div class="card">
//       <p>
//         <text class="headings">Easy Peasy App</text><br />
//         Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem ipsome
//         text Lorem ipsom
//       </p>
//     </div>
//     <div class="card">
//       <p>
//         <text class="headings">Ad Blocker</text><br />
//         Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem ipsome
//         text Lorem ipsom
//       </p>
//     </div>
//     <div class="card">
//       <p>
//         <text class="headings">Money Maker</text><br />
//         Super Cool Projects Lorem ipsome text Lorem ipsome text Lorem ipsome
//         text Lorem ipsom
//       </p>
//     </div>
//   </div>
