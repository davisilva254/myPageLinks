function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/AvatarDavi.png")
    // Adiciona uma classe de ajuste
    //document.body.classList.add("light-mode-adjustment")
  } else {
    img.setAttribute("src", "./assets/avatar2.png")
    // Remove a classe de ajuste se estiver presente
    //document.body.classList.remove("light-mode-adjustment")
  }
}
