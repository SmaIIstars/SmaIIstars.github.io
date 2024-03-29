// 随机排列
const shuffle = (arr) => {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
};

// 渲染数据
const renderLink = (data) => {
  let name,
    avatar,
    site,
    li = "";
  shuffle(data);
  for (let i = 0; i < data.length; i++) {
    name = data[i].name;
    avatar = data[i].avatar;
    site = data[i].site;
    li += `
    <div class="card">
      <a href=${site} target="_blank">
        <div class="thumb" style="background: url(${avatar});"></div>
      </a>
      <div class="card-header">
        <a href=${site} target="_blank">${name}</a>
      </div>
    </div>
    `;
  }
  document.querySelector(".link-navigation").innerHTML = li;
};

// 获取 json 文件
// dev ? /links/links_config.json : /myblog/links/links_config.json
fetch("/myblog/links/links_config.json")
  .then((response) => response.json())
  .then((res) => renderLink(res));
