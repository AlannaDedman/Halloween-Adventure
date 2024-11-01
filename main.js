function main() {
    startGame();
}

// before the first choice / the intro 

function startGame() {
    confirm("Ready to start?"); // booting up 
    
    let playerName = prompt("What is your name?"); 
    
    
    // setting the stage, location intro: 
    alert(`Welcome ${playerName}. Around you, books line the shelves of a victorian library. Fog rolls across the floor, and the great doors that lead outside are bolted shut with an ornate lock. It is dim, eerie, and you search for a way out. You are trapped here, and want to escape. You find two doors, each with a sign hanging above them...`);
    
    // first question & player choice: 
    let answerOne = +prompt(`The first door leads to the basement, and the second, to the gymnasium. Enter the number of the door you would like to enter (eg; '1'), and if you would like to stay in the library and continue searching, enter the number '3'.`);
    
    // if statements: 
    if (answerOne === 1) {
        pathOne();
    } else if (answerOne === 2) {
        pathTwo();
    }else if (answerOne === 3) {
        pathThree();
    }
}

// the different paths

// THE BASEMENT (START)
function pathOne() {
    alert(`You push the door open, and with a creak, it reveals a dark and winding staircase. You descend, and find yourself in the basement, a cold and cobblestone-walled room, with a map on the left wall, a lab station on the right, and an open book lying on a pedastal in the middle.`);
    let basementAnswer = +prompt(`Do you 1) inspect the map, 2) inspect the book, or 3) inspect the laboratory?`);
    
    // subsequent pathways
    
    if (basementAnswer === 1) {
        pathMap();
    } else if (basementAnswer === 2) {
        pathBook();
    } else if (basementAnswer === 3) {
        pathLab();
    }
    
// functions for the pathways
    function pathMap() {
        alert(`You inspect the map, displaying a layout of the house. The paper is old and thin, torn in places, and the image is unclear and smudged. However, you can see that if you continue down the hall connected to the basement, you will reach an elevator, but you don't know where it leads.`);
        let elevator = +prompt(`Do you 1) go to the elevator, or 2), continue inspecting the rest of the room.`);
        
        // escape route
        if (elevator === 1) {
            alert(`You walk down the dark hall, leaving the cold basement behind in favour of a damp corridor. At the end of the hall, you find a rickety elevator with old bars. You step inside, and push the button for up.`);
            win();
        } else if (elevator === 2) {
            stay();
        }
    }

    function pathBook() {
        alert(`You inspect the book. The writing isn't in any language you understand, and there are strange symbols drawn all over the page it's turned to, that page being 188. You notice a note written in blood on the table telling you to turn to page 199.`);
        let spellAnswer = +prompt(`Do you 1) turn to page 199? Or 2) continue to inspect the room for answers?`)
        
        if (spellAnswer === 1) {
            alert(`You turn to page 199, and the words on the page begin to glow. Reality warps around you, as the pages of the book grow hot. They don't burn, however. You, on the other hand, are not so lucky. Your skin begins to peel off, melting chunks of flesh fall to the floor as out from the book leaps a strange beast. You have accidentally summoned a demon.`);
            dead();
        } else if (spellAnswer === 2) {
            stay();
        }
        
    }
    
    function pathLab() {
        alert(`Moving over to the lab station, you notice many titration stands, vials and strange bottles filled with foreign,  glowing liquid. Three bottles are open; a bottle with neon green liquid, a bottle with pink liquid, and a bottle with white glowing liquid.`);
        let bottleChoice = +prompt(`Do you 1) pick up the green bottle, 2) pick up the pink bottle, 3) pick up the white bottle, or 4) go back to inspecting the rest of the room?`);
        
        // resulting paths 
        
        if (bottleChoice === 1) {
            greenBottle();
            
        } else if (bottleChoice === 2) {
            pinkBottle();
            
        } else if (botteChoice === 3) {
            whiteBottle();
            
        } else if (bottleChoice === 4) {
            stay();
        }
    }
        
        // function for green bottle
        function greenBottle() {
            alert(`You pick up the green bottle, and some of the liquid accidentally spills on your sweater. The green liquid begins to spread.`);
            let corrosive = +prompt(`Do you 1) take off your sweater, or 2) ignore it and continue looking at the lab?`);
            
            if (corrosive === 1) {
                alert(`You take off your sweater and continue on your journey, turning to the other two bottles.`);
                putBack();
            } else if (corrosive === 2) {
                putBackDie();
            }
        }
        
        // function for pink bottle
        function pinkBottle() {
            alert(`You pick up the pink bottle. It is shimmery and bright. Turning it over in your hands, you notice a label stuck on that reads 'drink me'.`);
            let drinkPink = +prompt(`Do you 1) drink the bottle, or 2) put it down and continue searching for something else?`);
            
            if (drinkPink === 1) {
                alert(`You press the cold glass of the bottle to your lips, drinking the grainy, pink liquid inside. Immediately, your throat begins to burn, and you know you've made a mistake! This was a trap set by whoever locked you here.`);
                dead();
            } else if (drinkPink === 2) {
                putBack();
            }
        }
        
        // function for white bottle 
        function whiteBottle() {
            alert(`You pick up the white vial, and see a note attached to its rim with a string. The note reads 'into your eyes my liquid goes, so the way out you may know'.`);
            let inEyes = +prompt(`Do you 1) pour the glowing white liquid into your eyes, or 2) put it back and continue searching?`);
            
            if (inEyes === 1) {
                alert(`You pour the white liquid into your eyes. It burns, at first, and you wonder if your eyeballs are being skinned like grapes. However, soon the pain fades, and when the world comes back into focus, it looks different. A trail of footprints leads down a hall at the end of the laboratory, and a spot on the map is circled. But your new sight abilities are fading fast, and the world is returning to normal.`);
                let wayOut = +prompt(`Do you 1) follow the footsteps, 2) inspect the map, or 3) put the vial back and look into the other bottles?`);
                
                if (wayOut === 1) {
                    alert(`You walk down the dark hall, leaving the cold basement behind in favour of a damp corridor. At the end of the hall, you find a rickety elevator with old bars. You step inside, and push the button for up.`);
                    win();
                } else if (wayOut === 2) {
                    putBack();
                }
            } else if (inEyes === 2) {
                putBack();
            }
        }
        
        // put back bottle time to look back at lab
        
        function putBack() {
            let putBackChoice = +prompt(`You put the vial back, and look at the table again. You see the same three bottles as before. Do you 1) pick up the green bottle, 2) pick up the pink bottle, 3) pick up the white bottle, or 4) return to inspect the rest of the room? `);
            
            if (putBackChoice === 1) {
                greenBottle();
                
            } else if (putBackChoice === 2) {
                pinkBottle();
                
            } else if (putBackChoice === 3) {
                whiteBottle();
                
            } else if (putBackChoice === 4) {
                stay();
                
            }
        
        // put back bottle die world (green / corrosive) NOT FINISHED     
            
        function putBackDie() {
            let dying = +prompt(`You put the vial back, and look at the table again. But your sweater is really itchy, now... and your vision is kind of blurry... which bottle do you take? 1, 2, or 3? The colours are all blurry anyway... `);
            
            if (dying === 1) {
                alert(`You pick up the first bottle in front of you, some more of its liquid spilling on you. Oh no! That was the green vial, and it turns out, it is a corrosive liquid, that had already begun killing you the longer it had contact with your skin, ${playerName}. That last part dealt you the final blow!`);
                dead();
                
            } else if (dying === 2) {
                let heal = +prompt(`You pick up the second bottle in front of you, and can just make out a label telling you to drink it. Do you? If yes, type '1', if not, type '2'.`);
                
                if (heal === 1) {
                    confirm(`You are healed! Return to searching the room, now.`);
                    stay();
                } else if (heal === 2) {
                    alert(`Unfortunately, the green liquid that spilled on your sweater was corrosive, and it was slowly killing you. Drinking the pink healing potion was your last chance. On its own, pink is deadly, but in contrast, it would have saved your life.`);
                    dead();
                }
                
            } else if (dying === 3) {
                alert(`Alas, it matters not. Unfortunately, the green liquid that spilled on your sweater was corrosive, and it was slowly killing you.`);
                dead();
                
            } else if (dying === 4) {
                stay();
                
            }
            
        }
        
        // put back function ends
        
    }
    
// continue inspecting room
    function stay() {
        let inspect = prompt(`Do you inspect 1) the map, 2) the book, or 3) the laboratory?`)
            if (inspect === 1) {
            pathMap();
        } else if (inspect === 2) {
            pathBook();
        } else if (inspect === 3) {
            pathLab();
        }
    }
}




// THE GYMNASIUM (START)
function pathTwo() {
    alert(`The second door creeks open slowly, revealing a small gymnasium with very little light.`);
    let gymOne=+prompt(`Do you enter anyways (1) or search library for a flashlight (2)?`);
    if (gymOne === 1) {
    alert (`On no! Something scurries infront of your feet and you fall and then crack your head on the floor :(`);
    dead() // brings back to the begining of the game
    } else if (gymOne === 2) {
        alert(`Congrats! You found a flashlight, you enter the gym...`);
    }
    //second prompt
    let jumpScare=+prompt(`The flashlight flicks on and you think you see something in the corner of the room, do you (1) investigate or (2) continue looking around?`);
    if (jumpScare === 1) {
        alert(`Ahh it was a super scary ghost! You were not expecting that so you have a heart attack and collapse on the ground.. `);
        dead();
        } else if (jumpScare === 2) {
        alert(`As you continue walking, you see the thing in the corner disapear and wonder what is was. You shine your flashlight around and spy a key on the ground.`);
        }
    //third prompt
    let third=+prompt (`You pick up the key and then look around but there are no doors except the one you came through. Do you (1) pocket the key, (2) kick the rusty key or (3) leave it on the floor?`);
    if (third === 1) {
       alert(`You pocket the key and continue walking, as you look up and see a sliver of the moon through a skylight!`);
       escapeOne();
    }else if (third === 2) {
        alert (`You kick the key across the room and hear a loud clunk.`);
        escapeTwo();
    }else if (third === 3) {
        alert(`You put the key down and sit against the wall with angst, disapointed.`)
        escapeThree();
    }
}
//final three paths for gym
function escapeOne() {
    let ladder=+prompt(`There seems to be nothing else in the gym other then that key in your pocket. Do you (1) cry or (2) try climbing the walls to reach the light?`);
    if (ladder === 1) {
        alert(`You decide there is nothing to do except cry, giving up the search to escape.`);
        dead();
    } else if (ladder ===2) {
        alert(`While trying to climb the walls, you accidentally push a brick that leads to a secret door.`);
        let door=+prompt(`Do you (1) enter or (2) try to find something to use your key with?`);
        if (door === 1) {
            alert(`Congratulations! The door leads outside into a graveyard and you climb the fence, escaping the haunted mansion.`);
            win();
        } else if (door===2 ) {
            alert(`As you leave the door alone, it closes as water starts to fill the gym but you don't know how to swim.`);
            dead();
        }
    }
}
function escapeTwo() {
    alert(`The key hit something hollow on the wall!`);
    let doorOne=+prompt(`When you press on the bricks, it leads you to a secret tunnel, do you (1) enter or (2) or think about it?`);
    if (doorOne === 1) {
            alert(`Congratulations! The door leads outside into a graveyard and you climb the fence, escaping the haunted mansion.`);
            win();
        } else if (doorOne===2 ) {
            alert(`When you are trying to decide what to do, the door closes and water starts to fill the gym but you don't know how to swim.`);
            dead();
        }
}
function escapeThree() {
    let door=+prompt(`As you sit down, you something in the middle of the room. Do you (1) go look at it or (2) go look for clues in the library?`);
    if (door===1) {
        alert(`As you reach the object in the middle, you realize it was a trap and plummet through the floor.`);
        dead();
    } else if (door===2) {
        pathThree();
    }
}
// dead screen - link this if the player dies 

function dead() {
    console.log(`        .`);
    console.log(`       -|-`);
    console.log(`        |`);
    console.log("     .-~~~-.");
    console.log(`  .'          '.`);
    console.log(`  |  R  I  P  |`);
    console.log(`  |           |`);
    console.log(`  |           |`);
    console.log(`\\|           |//`);
    confirm(`Oh no! You died. Restart?`);
    startGame();
}


// win screen - link this if the player wins 

function win() {
    confirm(`Congratulations!! You escaped the mansion successfully!`)
    startGame();
}


// calling the main 
main();