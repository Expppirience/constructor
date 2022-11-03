window.addEventListener("load", (e) => {
  const model = [
    { type: "title", value: "JS placeholder" },
    { type: "text", value: "text placeholder" },
    {
      type: "columns",
      value: ["123", "321", "231"],
    },
    { type: "image", value: "#" },
  ];

  const title = (block) => {
    return ` 
		<div class="row">
			<div class="col-sm">
				<p>${block.value}</p>
			</div>
		</div>`;
  };

  const text = (block) => {
    return ` 
		<<div class="row">
			<div class="col-sm">
				<h1>${block.value}</h1>
			</div>
		</div>`;
  };

  const columns = (block) => {
    const html = block.value.map((el) => `<div class="col-sm">${el}</div>`);
    console.log(html);
    return `${html.join("")}`;
  };

  const image = (block) => {
    return `
		<div class="row">
			<img src="${block.value}" />
		</div>
		`;
  };

  const $site = document.querySelector("#site");

  model.forEach((block) => {
    let html = "";

    if (block.type === "title") {
      html = title(block);
    } else if (block.type === "text") {
      html = text(block);
    } else if (block.type === "columns") {
      html = columns(block);
    } else if (block.type === "image") {
      html = image(block);
    }

    $site.insertAdjacentHTML("beforeend", html);
  });
});
