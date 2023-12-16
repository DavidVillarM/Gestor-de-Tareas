const tareas = document.querySelectorAll(".tareas");
const all_status = document.querySelectorAll(".status");
let draggableTarea = null;

tareas.forEach((tarea) => {
  tarea.addEventListener("dragstart", dragStart);
  tarea.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTarea = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTarea = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTarea);
  console.log("dropped");
}


const btns = document.querySelectorAll("[data-target-modal]");
const close_forms = document.querySelectorAll(".close-forms");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_forms.forEach((btn) => {
  btn.addEventListener("click", () => {
    const form = btn.closest(".form");
    form.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const forms = document.querySelectorAll(".forms");
    forms.forEach((form) => form.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* crear actividad/tarea */
const tarea_submit = document.getElementById("tarea_submit");

tarea_submit.addEventListener("click", crearTarea);

function crearTarea() {
  const tarea_div = document.createElement("div");
  const input_val = document.getElementById("tarea_input").value;
  const input_fecha = document.getElementById("tarea_date").value;
  const txt = document.createTextNode(input_val);
  /*const fecha = document.createElement(input_fecha);*/

  tarea_div.appendChild(txt);
  /*tarea_div.appendChild(Date);*/
  tarea_div.classList.add("tarea");
  tarea_div.setAttribute("draggable", "true");

  /* crear span */
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("cerrar");
  span.appendChild(span_txt);

  tarea_div.appendChild(span);

  pendiente.appendChild(tarea_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  //   console.log(tarea_div);

  tarea_div.addEventListener("dragstart", dragStart);
  tarea_div.addEventListener("dragend", dragEnd);

  document.getElementById("tarea_input").value = "";
  tarea_form.classList.remove("active");
  overlay.classList.remove("active");
}

const cerrar_btns = document.querySelectorAll(".close");

cerrar_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});