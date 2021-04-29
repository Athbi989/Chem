function initPerdiocElements(array = null) {
  let HtmlTable = document.getElementById("Pelements");
  let counter = 0;
  HtmlTable.innerHTML = ""; //Reset table
  //   HtmlTable.innerHTML += `
  //   <div class="empty-spacer-1"></div>
  //   <div class="empty-spacer-2"></div>
  //   `;
  if (array != null) {
    array.forEach((item) => {
      counter++;
      HtmlTable.innerHTML += `
          <div class="periodic-element" onclick="seeElement('${item.id}')" >
              <div class="periodic-element-inner">
              <div class="title">${item.id}</div>
              <div class="description">${item.name}</div>
              </div>
          </div>
          `;
    });
  } else {
    Pelements.forEach((item) => {
      counter++;
      HtmlTable.innerHTML += `
        <div class="periodic-element" onclick="seeElement('${item.id}')" >
            <div class="periodic-element-inner">
            <div class="title">${item.id}</div>
            <div class="description">${item.name}</div>
            </div>
        </div>
        `;
    });
  }
}

initPerdiocElements();
function seeElement(id) {
  var resultInfo = search(id, Pelements);
  $("#singleElement").modal("show");
  document.getElementById("js-img").src = "./assets/images/" + resultInfo["id"] + ".jpg";
  document.getElementById("js-title").innerHTML = `Element name : ${resultInfo["name"]}`;
  document.getElementById("js-name").innerHTML = `ℹ Name : ${resultInfo["name"]} (${resultInfo["id"]})`;
  document.getElementById("js-atomic").innerHTML = `📈 Atomic number : ${resultInfo["num"]} `;
  document.getElementById("js-mass").innerHTML = `⌛ Mass : ${resultInfo["mass"]}`;
}

function closeWindow() {
  $("#singleElement").modal("hide");
}

$("#elementString").keyup(function () {
  let string = document.getElementById("elementString").value;
  if (string != "") {
    let result = searchByName(string);
    if (result != false) {
      initPerdiocElements(result);
    } else {
      console.log("Not found");
    }
  } else {
    initPerdiocElements();
  }
});

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].id === nameKey) {
      return myArray[i];
    }
  }
}

function searchByName(nameKey) {
  let Strr = nameKey.toUpperCase();
  const items = Pelements.filter((item) => item.name.indexOf(Strr) !== -1);
  if (items.length > 0) {
    return items;
  } else {
    return false;
  }
}
