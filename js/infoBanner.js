AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        ShinChan: {
          banner_url: "./assets/posters/shinchan.jpg",
          title: "ShinChan",
          released_year: "1992",
          description:
            "He is the son of Hiroshi and Misae. His nickname is 'Shin-chan' Nohara and he is Himawari's brother, a kindergarten-aged boy whose antics are the basis for the series. He is 5 years old and yet acts overtly mature. In general, he is brutally honest, highly curious, and has no shame whatsoever.",
        },
        Cars: {
          banner_url: "./assets/posters/cars.jpg",
          title: "Cars",
          released_year: "2006",
          description:
            "The story of Cars is set in an alternate universe where every character is a vehicle of various sorts, whether that be an automobile, an aircraft and a watercraft. The film focuses on a rookie race car named Lightning McQueen who discovers the lost town of Radiator Springs on his way to the biggest race of his life.",
        },
        "Kick-Buttowski": {
          banner_url: "./assets/posters/kick-buttowski.jpg",
          title: "Kick Buttowski",
          released_year: "2010",
          description:
          "Clarence Francis 'Kick' Buttowski is a 10-year-old boy and the titular main protagonist of the show. He aspires to be the world's greatest daredevil (his biggest obsession). He has an older brother named Brad and a younger sister named Brianna. His best friend is Gunther, a thrill seeking boy.",
        },
        Doraemon: {
          banner_url: "./assets/posters/doraemon.png",
          title: "Doraemon",
          released_year: "1979",
          description:
            "Doraemon is the name of a robot cat that came from the future to help a boy named Nobita Nobi. Doraemon is about the life of Nobita Nobi. In a typical story Doramon uses a gadget to solve a problem for Nobita, but Nobita goes too far and ends up being punished and learning a lesson. Doraemon was turned into an anime television show in 1979",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });