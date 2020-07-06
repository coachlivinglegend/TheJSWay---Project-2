class Link {
    constructor(title, url, author) {
      let absoluteUrl = url;
      if (
        !absoluteUrl.startsWith("http://") &&
        !absoluteUrl.startsWith("https://")
      ) {
        absoluteUrl = `http://${absoluteUrl}`;
      }
      this.title = title;
      this.author = author;
      this.url = absoluteUrl;
    }
  }
  const links = [];
  links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
  links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
  links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));
  
  const linkContainer = document.getElementById("content");

for (link of links) {
    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add("link");
    const linkTitle = document.createElement("a");
    linkTitle.textContent = link.title;
    linkTitle.classList.add("linkTitle")
    linkTitle.href = link.url;
    const linkSpan = document.createElement("span");
    linkSpan.classList.add("linkUrl");
    linkSpan.textContent = link.url;
    const linkHead = document.createElement("h4");
    linkHead.classList.add("linkHeadline");
    linkHead.appendChild(linkTitle);
    linkHead.appendChild(linkSpan);
    const linkAuthor = document.createElement("span");
    linkAuthor.classList.add("linkAuthor");
    linkAuthor.textContent = `Submitted by ${link.author}`;
    linkWrapper.appendChild(linkHead);
    linkWrapper.appendChild(linkAuthor);
    linkContainer.appendChild(linkWrapper)
}


const createForm = () => {
    const formWrapper = document.createElement("div");
    formWrapper.classList.add("linkForm")
    // formWrapper.style.display = "flex";
    // formWrapper.style.justifyContent = "space-between";
    const formTitle = document.createElement("input");
    formTitle.style.width = "30%";
    formTitle.type = "text";
    formTitle.placeholder = "Link Title";
    formTitle.required = true;
    const formLink = document.createElement("input");
    formLink.style.width = "40%";
    formLink.type = "text";
    formLink.placeholder = "Link Address";
    formLink.required = true;
    const formAuthor = document.createElement("input");
    formAuthor.style.width = "20%";
    formAuthor.type = "text";
    formAuthor.placeholder = "Author";
    formAuthor.required = true;
    const addLink = document.createElement("input");
    addLink.type = "submit";
    addLink.value = "Add Link";
    addLink.addEventListener("click", () => {
        if (formTitle.value !== "" && formLink.value !== "" && formAuthor.value !== "") {
        const newLinkWrapper = document.createElement("div");
        newLinkWrapper.classList.add("link");
        const newLinkTitle = document.createElement("a");
        newLinkTitle.textContent = formTitle.value;
        newLinkTitle.classList.add("linkTitle")
        let absoluteLink = formLink.value;
        if (
            !absoluteLink.startsWith("http://") &&
            !absoluteLink.startsWith("https://")
          ) {
            absoluteLink = `http://${absoluteLink}`;
          }
        newLinkTitle.href = absoluteLink;
        const newLinkSpan = document.createElement("span");
        newLinkSpan.classList.add("linkUrl");
        newLinkSpan.textContent = absoluteLink;
        const newLinkHead = document.createElement("h4");
        newLinkHead.classList.add("linkHeadline");
        newLinkHead.appendChild(newLinkTitle);
        newLinkHead.appendChild(newLinkSpan);
        const newLinkAuthor = document.createElement("span");
        newLinkAuthor.classList.add("linkAuthor");
        newLinkAuthor.textContent = `Submitted by ${formAuthor.value}`;
        newLinkWrapper.appendChild(newLinkHead);
        newLinkWrapper.appendChild(newLinkAuthor);
        linkContainer.prepend(newLinkWrapper);
        formWrapper.remove();
        const goodWrapper = document.createElement("div");
        goodWrapper.style.backgroundColor = "#deefd8"
        goodWrapper.style.borderRadius = "5px";
        const para = document.createElement("p");
        para.style.color = "#488159";
        para.style.paddingTop = "15px";
        para.style.paddingBottom = "15px";
        para.style.paddingLeft = "10px";
        para.textContent = `The link ${formTitle.value} has been succesfully added!`;
        goodWrapper.appendChild(para);
        linkContainer.prepend(goodWrapper);

        const dis = () => {
            return goodWrapper.remove();
        }
        setTimeout(dis, 2000);
    } else {
    alert ("None of the input fields can be left empty.");
    }
});
    addLink.style.backgroundColor = "#227cb7";
    addLink.style.color = "white";
    addLink.style.marginLeft = "5px";
    addLink.style.borderRadius = "5px";
    formWrapper.appendChild(formTitle);
    formWrapper.appendChild(formLink);
    formWrapper.appendChild(formAuthor);
    formWrapper.appendChild(addLink);
    linkContainer.prepend(formWrapper);
}
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", createForm);


const grabData = () => {
}