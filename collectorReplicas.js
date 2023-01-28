function PicsAndText(){
  //create an array for the images
  var itemPics = new Array(8);
  //define the arrays contents
  itemPics[0] = 'batarangHorizontal.jpg';
  itemPics[1] = 'batarangVertical.jpg'
  itemPics[2] = 'webShootersvertical.jpg';
  itemPics[3] = 'webShootersHorizontal.jpg';
  itemPics[4] = 'mjolnirvertical.jpg';
  itemPics[5] = 'mjolnirHorizontal.jpg';
  itemPics[6] = 'bladesOfChaosVertical.jpg';
  itemPics[7] = 'bladesOfChaosHorizontal.jpg';
  //create an array for the text
  var text = new Array(8);
  //define the text arrays contents
  text[0] = 'Batarangs are mainly used as ranged weapons to subdue or handicap enemies from afar. Batarangs can also be used to break objects, such as glass and pipes. Precisely thrown Batarangs are capable of disarming enemies or disrupting weapons. In some stories, Batman has added sedatives to his Batarangs to incapacitate foes immediately or over time. Just like in the comics, these replicas are made of a steel alloy and stylized/shaped in the form of a bat.';
  text[1] = "Batman is the secret identity of Bruce Wayne, who, after witnessing the murder of his parents as a child, trains himself to physical and intellectual perfection and dons a bat-themed costume in order to fight crime. One of his most versatile tools, also known as batarangs, are mainly used as ranged weapons to subdue or handicap enemies from afar. Batarangs can also be used to break objects, such as glass and pipes. Precisely thrown Batarangs are capable of disarming enemies or disrupting weapons. In some stories, Batman has added sedatives to his Batarangs to incapacitate foes immediately or over time. Just like in the comics, these replicas are made of a steel alloy and stylized/shaped in the form of a bat.";


  text[2] = 'These shooters contain web that is a pasty glue like substance. Upon contact with a solid object, it forms into a thin, tough, and flexible adhesive. However, after an hour, the web dissolves into powder. Any web-shooter also has a pressure button that requires a 65 pound pressure push to activate the shooting of any web, and this replica is no different. The button is also located high on the palm and needs a double-tap press to avoid any and all unwanted web firings.';
  text[3] = "In his origin story, Spider-Man gets his superhuman spider-powers and abilities after being bitten by a radioactive spider; these include clinging to surfaces and ceilings, superhuman strength, speed, agility, reflexes, stamina, and detecting danger with his precognition ability called 'spider-sense.' He also builds wrist-mounted 'web-shooter' devices that shoot artificial spider-webs of his own design that were meant to be used for fighting his enemies and web-swinging across the city. These shooters contain web that is a pasty glue like substance. Upon contact with a solid object, it forms into a thin, tough, and flexible adhesive. However, after an hour, the web dissolves into powder. Any web-shooter also has a pressure button that requires a 65 pound pressure push to activate the shooting of any web, and this replica is no different. The button is also located high on the palm and needs a double-tap press to avoid any and all unwanted web firings.";


  text[4] = 'Using the Uru bestowed to himself, Odin ordered the Dwarves of Nidavellir to forge Mjolnir. The blacksmiths needed to use the tremendous heat of a star to get the forge hot enough to manipulate the Uru. In the 17-weeks of forging the hammer, the star exploded and almost took Midgard with it. After Mjolnir landed on Earth, Odin retrieved it. It was used by Odin before he passed it down to Hela and then Thor. The hammer is used extensively by Thor as his primary weapon, as it grants him a way to channel his power.';
  text[5] = "Using the Uru bestowed to himself, Odin ordered the Dwarves of Nidavellir to forge Mjolnir. The blacksmiths needed to use the tremendous heat of a star to get the forge hot enough to manipulate the Uru. In the 17-weeks of forging the hammer, the star exploded and almost took Midgard with it. After Mjolnir landed on Earth, Odin retrieved it. It was used by Odin before he passed it down to Hela and then Thor. Thor is the God of Thunder,] a member of the race known as the Asgardians, a group of humanoid beings from the pocket dimension of Asgard,[49] the Realm Eternal.[50] Thor is the son of Odin, the All-Father and King of Asgard.[51] He was worshiped by the humans known as Vikings and became part of Norse Mythology.[52] Armed with his enchanted Uru hammer Mjolnir, which helps him to channel his godly energies, he became the mightiest warrior in the Ten Realms.;"


  text[6] = "The Blades of Chaos were forged at the darkest depths of the Underworld by Ares himself. They were imbued with primordial fire, which allowed them to ignite with every attack that the user performed. The Blades' chains would stretch out for a set distance with each attack, allowing for fluid movement no matter who wielded them. The chains of the blades were permanently seared onto the forearms of the wielder, which served as a reminder of their oath to the God of War, and could only be removed either by the God of War himself or when the wielder's time of servitude ended. ";
  text[7] = "The Blades of Chaos are introduced in God of War as Kratos’ signature weapons throughout the Greek Era. Forged in the depths of the Underworld and personally offered to Kratos by Ares himself, the Blades became a symbol of the Spartan’s servitude to the Olympians, emphasized by the chains bound to the very flesh of Kratos. Widely feared throughout Greece, the Blades of Chaos personified what Kratos had become during the darkest period of his life: a monster who killed his own family out of bloodlust, turning him into the infamous Ghost of Sparta. The old Blades later return during the Norse Era in God of War (2018) as Kratos’ secondary weapons. Symbols of a shameful and particularly painful past, Kratos indeed swore to bury them forever, never to be used again. Although these cursed weapons have been replaced by the Leviathan Axe, the Spartan reluctantly carried them once more out of his love for his son, eventually saving the latter’s life."

  //check which id button has been clicked and write the corresponding elements to their id to the DOM
  if(document.getElementById("batarang").checked){
    if((window.innerWidth < 768 || window.innerWidth >= 1500)){
      document.getElementById("img").src = itemPics[1];
    }
    else{
      document.getElementById("img").src = itemPics[0];
    }
    if(window.innerHeight <= 1100 || window.innerWidth >= 1500){
      document.getElementById("p").innerHTML = text[0];
    }
    else{
      document.getElementById("p").innerHTML = text[1];
    }
  }

  else if(document.getElementById("webShooters").checked){
    if((window.innerWidth < 768 || window.innerWidth >= 1500)){
      document.getElementById("img").src = itemPics[2];
    }
    else{
      document.getElementById("img").src = itemPics[3];
    }
    if(window.innerHeight <= 1100 || window.innerWidth >= 1500){
      document.getElementById("p").innerHTML = text[2];
    }
    else{
      document.getElementById("p").innerHTML = text[3];
    }
  }


  else if(document.getElementById("mjolnir").checked){
    if((window.innerWidth < 768 || window.innerWidth >= 1500)){
      document.getElementById("img").src = itemPics[4];
    }
    else{
      document.getElementById("img").src = itemPics[5];
    }
    if(window.innerHeight <= 1100 || window.innerWidth >= 1500){
      document.getElementById("p").innerHTML = text[4];
    }
    else{
      document.getElementById("p").innerHTML = text[5];
    }
  }


  else{
    if((window.innerWidth < 768 || window.innerWidth >= 1500)){
      document.getElementById("img").src = itemPics[6];
    }
    else{
      document.getElementById("img").src = itemPics[7];
    }
    if(window.innerHeight <= 1100 || window.innerWidth >= 1500){
      document.getElementById("p").innerHTML = text[6];
    }
    else{
      document.getElementById("p").innerHTML = text[7];
    }
  }
}
//variable to hold a running total for the next function
total = 0;
function quantityCompute(){
  //extract the value in the quantity textbox
  var quantity = parseFloat(document.getElementById("quantity").value);
  //if the quantity is a number that is greater than 0, give a price when the button is pressed
  if(quantity > 0){
    //if the batarang button is checked, multiply the quantity by 100
    if(document.getElementById("batarang").checked){
      var custTotal = quantity * 100;
      //ask the user to confirm their purchase
      var prompt = window.confirm("You want to purchase " + quantity + " batarang(s).  Click OK if this is correct.");
    }
    else if(document.getElementById("webShooters").checked){
      var custTotal = quantity * 150;
      //ask the user to confirm their purchase
      var prompt = window.confirm("You want to purchase " + quantity + " pairs of web shooters.  Click OK if this is correct.");
    }
    else if(document.getElementById("mjolnir").checked){
      var custTotal = quantity * 200;
      //ask the user to confirm their purchase
      var prompt = window.confirm("You want to purchase " + quantity + " replica(s) of mjolnir. Click OK if this is correct.");
    }
    else{
      var custTotal = quantity * 250;
      //ask the user to confirm their purchase
      var prompt = window.confirm("You want to purchase " + quantity + " replica(s) of the Blades Of Chaos. Click OK if this is correct.");
    }
      if(prompt){
        //add custTotal to running total
        total += custTotal;
        //open a new window
        var myWindow = window.open("", "", "innerWidth=100,innerHeight=50,font-size=20px,font-weight=bold");
        //write total to new window
        myWindow.document.write('Total: $' + total);
        //close the new window once any of the radio buttons are clicked again
        document.getElementById("closeNewWindow").addEventListener("click", function(){
          myWindow.close();
        });
      }
      else{
        alert('Order was canceled')
      }
    }

  //if the quantity is 0, carry out the corresponding action
  else if(quantity == 0){
    alert("The number you enter must be greater than 0");
  }

  //if the quantity is less than 0, carry out the corresponding action
  else if(quantity < 0){
    alert("The number you enter cannot be negative");
  }

  //throw up a message if anything else than a number is entered
  else{
    alert("A numerical quantity must be entered to make a purchase")
  }
}
