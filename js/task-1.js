const categories = document.querySelectorAll(".item")
console.log("Number of categories: ", categories.length);

categories.forEach(li => {

    const categoryName = li.children[0].textContent;
    const secondChild = li.children[1];

    console.log("Category: ", categoryName);
    console.log("Elements: ", secondChild.children.length);
});