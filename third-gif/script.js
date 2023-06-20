document.addEventListener("DOMContentLoaded", function () {
  var lists = document.getElementsByClassName("drag-list");

  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add("dragging");
  }

  function onDragOver(event) {
    event.preventDefault();
    var draggingElement = document.querySelector(".dragging");
    var targetElement = event.target.closest(".drag-list li");
    var currentList = draggingElement.parentNode;
    var targetList = targetElement.parentNode;

    if (targetElement && currentList !== targetList) {
      targetList.insertBefore(draggingElement, targetElement.nextSibling);
    }
  }

  function onDragEnd(event) {
    event.target.classList.remove("dragging");
  }

  for (var i = 0; i < lists.length; i++) {
    lists[i].addEventListener("dragstart", onDragStart);
    lists[i].addEventListener("dragover", onDragOver);
    lists[i].addEventListener("dragend", onDragEnd);
  }
});
