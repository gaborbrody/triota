PennController.ResetPrefix(null) // Shorten command names (keep this line here)
//DebugOff()
//disjoint with audio


//Sequence( "consent", "welcome" , "audiocheck", "instructions",  randomize("experiment") , "send" , "final" );
Sequence( "welcome","consent", "audiocheck", "barn", "training",  randomize("block1") , randomize("block2") ,randomize("block3") ,randomize("block4") ,"send" , "final" );




newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Add ID</p>")
    ,
    newTextInput("inputID")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("inputID") )
)
.log( "ID" , getVar("ID") )

newTrial( "consent" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    .center()
    ,
    newText("<p>You and your child are invited to take part in a Brown University research study. Your participation is voluntary.</p>")
    .size(800)
    .center()
     ,
    newText("<p>RESEARCHER: Roman Feiman, PhD, roman_feiman@brown.edu, 190 Thayer St, Providence, RI 02912</p>")
    .size(800)
    .center()
     ,
    newText("<p>PURPOSE: The study is about what children understand about language. We are interested in the types of information children use when they interpret sentences.</p>")
    .size(800)
    .center()
     ,
    newText("<p>PROCEDURES: Your child will be presented with a set (2-4) of options on your computer screen, usually among different kinds of toys. He/She will be asked to choose between the options based upon criteria set by the researcher (usually which choice has more, or a higher reward). During the session, you and your child will be recorded via your computer's webcam and microphone. Video recordings and other data you enter are sent securely to our lab.Your child may also be presented with English sentences one at a time and will be asked to judge whether the sentence is right or appropriate for a given situation. You or your child may also be asked to fill out a questionnaire related to your child’s vocabulary or language(s). The goal is to characterize the process of language development, not to characterize individual children.</p>")
     .size(800)
     .center()
     ,
    newText("<p>TIME INVOLVED: The study will take approximately 30-45 minutes of your time.</p>")
     .size(800)
     .center()
    ,
    newText("<p>COMPENSATION: You will receive $5 for compensation of your time. You will be asked to provide your email to researchers in order to receive an electronic gift certificate. You will receive your gift within a week of participating. This email will only be used to send your gift unless you opt-in to future communication with Brown developmental labs.</p>")
    .size(800)
    .center()
    ,
    newText("<p>RISKS: We have attempted to minimize the risk of yours and your child’s identifiable information being accessed. All information pertaining to the studies (screening forms, behavioral, and video data) will be identified with a unique arbitrary number. In reports, you and your child will not be identified individually. Your child may or may become tired of answering questions. You or your child may choose to stop the procedures at any time.</p>")
    .size(800)
    .center()
    ,
    newText("<p>BENEFITS: You and your child may not directly benefit from being in this research study.</p>")
    .size(800)
    .center()
    ,
    newText("<p>CONFIDENTIALITY: All subjects will be coded and assigned a number to be used for data files. One lab computerized password protected file will link that number with subject identifying and demographic information. If information regarding child abuse or neglect is disclosed or witnessed, it must be reported to appropriate agencies. Brown University staff sometimes review studies like this one to make sure they are being done safely and correctly. If a review of this study takes place, your records may be examined. The reviewers will protect your confidentiality.</p>")
    .size(800)
    .center()
    ,
    newText("<p>VOLUNTARY: You and your child do not have to be in this study if you do not want to be. Even if you decide to be in this study, you and/or your child can change your mind and stop at any time.</p>")
    .size(800)
    .center()
    ,
    newText("<p>CONTACT INFORMATION: If you have any questions about your participation in this study, you can call Roman Feiman at (401) 863-6860 or email Roman_Feiman@Brown.edu</p>")
    .size(800)
    .center()
    ,
    newText("<p>YOUR RIGHTS: If you have questions about your rights as a research participant, you can contact Brown University’s Human Research Protection Program at 401-863-3050 or email them at IRB@Brown.edu.</p>")
        .size(800)
        .center()
        ,
    newText("<p>CONSENT TO PARTICIPATE:By clicking the link below, you agree that you have read and understand the consent document and that you are this child's parent or legal guardian and both agree to participate in this study. You may print this screen for your records.</p>")
        .size(800)
        .center()
        ,
    newText("<p>You can print or request a copy of this form</p>")
.center()
    ,
    newButton("I Consent")
    .center()
        .print()
        .wait()
)

newTrial( "audiocheck" ,
    defaultText
        .print()
    ,
    newText("<p>Do you hear this audio?</p>")
    ,
    newAudio("test", "https://expt.pcibex.net/ibexexps/example/example/test.mp3")
    .print()
    .wait()
    ,
    newButton("I Hear it!")
        .print()
        .wait()
)





Template( "barn.csv",variable =>

newTrial( "barn" ,
newImage("B1", "barn.png"),
newImage("B2", variable.Barn),
newImage("BS", "barnselector.png"),
newAudio("R", variable.BaS),

newText("<p>Feel free to encourage your child to point to the barn! When they point on the barn, click on it!</p>")
.print()
,
newCanvas( "myCanvasB" , 800 , 600 ) //training canvas
    .settings.css( "border" , "solid 1px black" )
    .settings.center()
    .settings.add( "center at 50%" , "center at 50%" , getImage("B1") )
    .settings.add("center at 50%" , "center at 50%", getImage("BS") )
    .print()
    ,
    newSelector("training")
    .add( getImage("BS")  ) //add selector shapes (invisble)
     .keys(          "F"   )
     .wait()
,
        getCanvas("myCanvasB") //training p2
         .settings.center()
         .settings.add( "center at 50%" , "center at 50%" , getImage("B2") )
         .print()
         ,
    getAudio("R") // play audio 2
            .play()
           ,
     newTimer(4000)
         .start()
         .wait(),
         getAudio("R") // play audio 2
            .pause()
)

)

Template( "training.csv",variable =>

newTrial( "training" ,
newImage("Tr1", variable.T1),
newImage("Tr2", variable.T2),
newAudio("TrS", variable.TS),
newImage("left", "selector.png"),
newImage("right", "selector.png"),
newAudio("R", "trew.mp3"),
newImage("GIF1", "https://i.giphy.com/media/1wX5TJZPqVw3HhyDYn/giphy.gif")
.size(500,500),

newText("<p>Feel free to encourage your child to point the object mentioned! When they do it, just click on it!</p>")
.print()
,
newCanvas( "myCanvasT" , 800 , 600 ) //training canvas
    .settings.css( "border" , "solid 1px black" )
    .settings.center()
    .settings.add( "center at 50%" , "center at 50%" , getImage("Tr1") )
    .print()
    ,

        newKey("F")
        .wait()
        ,

        getCanvas("myCanvasT") //training p2
         .settings.center()
         .settings.add( "center at 50%" , "center at 50%" , getImage("Tr2") )
        .settings.add(1, 78, getImage("left") )
         .settings.add(572, 78, getImage("right") )
         .print(),
        getAudio("TrS") // play audio
        .play(),
    newTimer(4000)
         .start()
         .wait(),
    newSelector("training")
    .add( 1, 78, getImage("left") , 572, 78, getImage("right") )
    .keys(          "F"    ,          "J"   )
        .settings.frame("dashed 3px black") //define how selection looks like
        .wait(),
            newTimer(1000)
         .start()
         .wait(),
        getCanvas("myCanvasT")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("GIF1") )
     .print()
     ,
   getAudio("R") // play audio 2
   .play()
           ,
     newTimer(4000)
         .start()
         .wait(),
         getAudio("R") // play audio 2
            .pause()
)

)


newTrial( "instructions" ,

newImage("T1", "T1.png"),
newImage("T2", "T2.png"),
newImage("left", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("right", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("starter", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/starter.png"),

newCanvas( "myCanvasT" , 800 , 600 ) //training canvas
    .settings.css( "border" , "solid 1px black" )
    .settings.center()
    .settings.add( "center at 50%" , "center at 50%" , getImage("T1") )
    .settings.add(1, 78, getImage("left") )
    .settings.add(287, 78, getImage("center") )
   .settings.add(572, 78, getImage("right") )
    .print()
    ,
    newSelector("training")
    .add( getImage("left")  , getImage("right") ) //add selector shapes (invisble)
        .settings.frame("dashed 3px black") //define how selection looks like
        .wait()
        ,
        newTimer("hurry", 1200)
            .start()
            .wait()
            ,
        getCanvas("myCanvasT") //training p2
         .settings.center()
         .settings.add( "center at 50%" , "center at 50%" , getImage("T2") )
         .settings.add(267, 564, getImage("starter") )
         .print()
         ,
         newSelector("starter") //Click to start trials
         .add( getImage("starter") )
             .settings.frame("dashed 3px black")
             .wait()
)
Template( "fulldesign.csv",variable =>
newTrial( "block"+variable.Block ,

newImage("cross", "cross.png"),
newImage("01", variable.P1),
newImage("02", variable.P2),
newImage("03", variable.P3),
newImage("04", variable.P4),
newImage("05", variable.P5),
newImage("06", variable.P6),
newImage("07", variable.P7),
newAudio("A4", variable.A4),
//newAudio("A5", variable.A5),
newAudio("A6", variable.A6),
newAudio("A7", variable.A7),
newAudio("PM", "Ascending.mp3"),
newAudio("M", "Accent.mp3"),
newAudio("R", "Cheer.mp3"),
newAudio("Ma", "Magic.mp3"),
newImage("left", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("center", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("right", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("starter", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/starter.png"),
newImage("GIF1", "https://i.giphy.com/media/xIH1nf7uUuQcU/giphy.gif")
.size(800,450),

newText("<p>Don't point to the screen or influence your child! When they point an on object, click on it!</p>")
.print(),
//Present pictures one by one

newCanvas( "myCanvas" , 800 , 600 )
    .settings.css( "border" , "solid 1px black" )
    .settings.center()
    .settings.add( "center at 50%" , "center at 50%" , getImage("cross") )
    .settings.add(283, 521, getImage("starter") )
    .print()
    ,
    newSelector("starter") //Click to start trials
    .add( getImage("starter") )
    .settings.frame("dashed 3px black")
    .wait()
    ,

getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("01") )
     .print()
     ,
    newTimer(1500)
        .start()
        .wait()
    ,
getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("02") )
     .print()
          ,

    newTimer(1000)
        .start()
        .wait()
    ,
getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("03") )
     .print()
,
      getAudio("A4") // play audio 4
             .play()
     ,
    newTimer(3000)
        .start()
        .wait()
        ,

getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("04") )
     .print()
,
    newTimer(1000)
        .start()
        .wait()
             ,


getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("05") )
     .print()
     ,
    getAudio("PM") // play audio 2
            .play()
        ,
     newTimer(3500)
         .start()
         .wait()
         ,
getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("06") )
     .print()
     ,
    getAudio("M") // play audio 2
            .play()
           ,
     newTimer(2500)
         .start()
         .wait()
         ,
getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("07") )
     .print()
     ,

  //    getAudio("A5") // play audio 5
  //           .play()
//             ,
//     newTimer(4000)
//         .start()
//         .wait()
//         ,
getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("07") )
     .settings.add(1, 78, getImage("left") )
     .settings.add(287, 78, getImage("center") )
     .settings.add(572, 78, getImage("right") )
     .print()
    ,


//     getAudio("A7") // play audio 6
//             .play()
//             ,
//     newTimer(1000)
//         .start()
//         .wait()
//         ,
      getAudio("A6") // play audio 6
             .play()
             ,
     newTimer(2000)
         .start()
         .wait()

         ,
newVar("RT").global().set( v => Date.now() ) //RT measurement start
,
newSelector("shapes")
.add( getImage("left") , getImage("right"), getImage("center") ) //add selector shapes (invisble)
.keys(          "F"    ,          "J" ,  "G" )
    .settings.frame("dashed 3px black") //define how selection looks like
    .log()
    .wait()
,
    getVar("RT").set( v => Date.now() - v ) //RT measurement end
,
     newTimer(1000)
         .start()
         .wait()

         ,
getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("GIF1") )
     .print()
     ,
    getAudio("R") // play audio 2
            .play()
           ,
     newTimer(4000)
         .start()
         .wait(),
         getAudio("R") // play audio 2
            .pause()


)


//log relevant variables
.log( "ReactionTime" , getVar("RT") )
.log( "ID", getVar("ID"))
.log("Trialtype",variable.TrialT)
.log("ObjPair",variable.ObjPair)
.log("Group",variable.Group)
.log("Frame",variable.Frame)
.log("Noun",variable.Noun)
.log("TransformType",variable.Transform)
.log("TransformSide",variable.TransformS)
.log("NounDist",variable.NounDist)
)
SendResults( "send" ) //send results: you have to get here in order for results to be sent at all!!


newTrial( "final" ,
newImage("http://pclpsrescit2.services.brown.edu/blt_lab/ids/images/thanks.jpg")
    .print()
        .print()
    ,
    newText("<p>VIDEO RELEASE (OPTIONAL) </p>")
        .print()
    ,
    newText("<p>A video will be made of you and your child during the study for the purpose of data analysis. You can consent to allow the researchers to show these videos in classrooms to students, to other researchers at conferences, or for scientific publications, and/or other public settings like radio or television. In any use of such videotapes, no information regarding you or your child’s identity will be released. Consent is voluntary, and is not required for your child to participate in the research. You have the right to ask that the video be stopped or erased during recording. Do you agree that your child’s videotaped session can be used for scientific publications, display in classroom settings, display at scientific conferences or lectures, and/or other public settings like radio or television?<p>")
        .print()
    ,
    newButton("Yes")
            .print()
            .wait()

)
