var i = 0;
//creating element function
function element(ele) {
  return document.createElement(ele);
}
//div
const div = element("div");
div.className = "text-center";
const h1 = element("h1");
const img = element("img");
const details = element("div");
details.className = "text-start m-2";

const fish = async function fishfun() {
  try {
    const response = await fetch("https://www.fishwatch.gov/api/species");

    const data = await response.json();
    console.log(data);

    div.innerText = "";

    h1.innerText = data[i]["Species Name"];

    img.className = "h-50 w-50";
    if (data[i]["Image Gallery"][0].src !== null) {
      img.alt = data[i]["Image Gallery"][0].alt;
      //else
      img.src = data[i]["Image Gallery"][0].src;
    } else if (data[i]["Image Gallery"][0].src !== null) {
      img.alt = data[i]["Image Gallery"].alt;
      img.src = data[i]["Image Gallery"].src;
    }
    details.innerHTML = `Physical Description:${data[i]["Physical Description"]}\n
    Taste:${data[i]["Taste"]}\nHealth Benefits:${data[i]["Health Benefits"]}\n
    Human Health:${data[i]["Human Health"]}`;
    div.append(h1, img, details);
    document.body.append(div);
    i++;
  } catch (err) {
    i++;
    console.log(err);
  } finally {
    //div.append(h1);
  }
  // finally{
  //   i++;
  //   div.append(h1);
  // }
};
fish();

const btn = element("button");
btn.innerText = "Next Fish";
btn.className = "btn btn-outline-success m-2";

// if (i == 116){ i = 0;}
// else i++;

btn.addEventListener("click", fish);
document.body.append(btn);
