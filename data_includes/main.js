PennController.ResetPrefix(null) // Shorten command names (keep this line here)
DebugOff()


Sequence( "consent", "welcome" , randomize("experiment") , "send" , "final" );


newTrial( "consent" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>You are invited to take part in a Brown University research study. Your participation is voluntary.</p>")
     ,
    newText("<p>RESEARCHER: Roman Feiman, PhD, roman_feiman@brown.edu, 190 Thayer St, Providence, RI 02912</p>")
     ,
    newText("<p>PURPOSE: The study is about how people understand language. We are interested in what adult behavior is like so we can find out how language comprehension and production change as a person develops.</p>")
     ,
    newText("<p>PROCEDURES: In this survey, you will be asked look at a visual display and locate a particular image in what you read or hear.</p>")
     ,
    newText("<p>TIME INVOLVED: The study will take approximately 15 minutes of your time.</p>")
     ,
    newText("<p>COMPENSATION: The amount of compensation you will receive depends on the criterion and the length of the study, in keeping with the averages and standards used in the Amazon MechanicalTurk community.</p>")
    ,
    newText("<p>RISKS: There is no known or anticipated risk associated with your participation in this study. You may discontinue this study at any time.</p>")
    ,
    newText("<p>BENEFITS: There is no anticipated direct benefit from being in this research study.</p>")
    ,
    newText("<p>CONFIDENTIALITY: Because participants are recruited through Amazon's Mechanical Turk website, participation happens over the internet and we have no information about participants’ identities. We collect Worker ID numbers through Amazon Mechanical Turk. These will be stored electronically on password-protected computers, to which only authorized researchers will have access. Following standard practice, we will record IP address to check whether a particular internet connection is being used an unreasonable number of times for the same experiment. This information will only be used to exclude multiple datasets generated from the same IP address. Brown University staff sometimes review studies like this one to make sure they are being done safely and correctly. If a review of this study takes place, your records may be examined. The reviewers will protect your confidentiality.</p>")
    ,
    newText("<p>VOLUNTARY: You do not have to be in this study if you do not want to be. Even if you decide to be in this study, you can change your mind and stop at any time.</p>")
    ,
    newText("<p>CONTACT INFORMATION: If you have any questions about your participation in this study, you can call Roman Feiman at 401-863-6860 or email Roman_Feiman@Brown.edu</p>")
    ,
    newText("<p>YOUR RIGHTS: If you have questions about your rights as a research participant, you can contact Brown University’s Human Research Protection Program at 401-863-3050 or email them at IRB@Brown.edu.</p>")
    ,
    newText("<p>IMPORTANT INFORMATION ABOUT YOUR MTURK ID: This ID does not directly identify you, but it can be linked to your public profile page. You may, therefore, wish to restrict what information you share on this public profile. We will not share your mTurk ID with anyone outside of our research team. If you ever contact us, Amazon.com will automatically insert your email address into the message so that we can reply to you. We will use your name and email only to respond to your communication and will never distribute it to anyone outside of our research team. For more information about the privacy and confidentiality limitations associated with using mTurk please refer to Amazon’s mTurk Privacy Policy: https://www.mturk.com/mturk/privacynotice and https://www.mturk.com/mturk/contact .</p>")
    ,
    newText("<p>CONSENT TO PARTICIPATE: Clicking the button below confirms that you have read and understood the information in this document, are 18 years old or older and that you agree to volunteer as a research participant for this study.</p>")


    
    ,
    newButton("I Consent")
        .print()
        .wait()
)
newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>Piglet and tigger are playing at their home. They have their toys on their shelves.</p>")
    ,
    newText("<p>They have a really high shelves and they cannot reach their toys.</p>")
    ,
    newText("<p> When they ask for a toy, can you help them by clicking on it?</p>")
    ,
    newText("<p>And please turn your browser full screen.</p>")
    ,
    newText("<p>Please enter your ID and then click the button below to start the experiment.</p>")
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


Template( variable => 
//Load pictures
newTrial( "experiment",
newImage("cross", "cross.png"),    
newImage("01", variable.P1),
newImage("02", variable.P2),
newImage("03", variable.P3),
newImage("04", variable.P4),
newImage("05", variable.P5),
newImage("06", variable.P6),
newImage("left", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("center", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("right", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/selector.png"),
newImage("starter", "https://expt.pcibex.net/ibexexps/gaborbrody/Triota/starter.png"),

//Present pictures one by one

newCanvas( "myCanvas" , 1024 , 768 )
    .settings.css( "border" , "solid 1px black" )
    .settings.center()
    .settings.add( "center at 50%" , "center at 50%" , getImage("cross") )
    .settings.add(356, 667, getImage("starter") )
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
    newTimer(1500)
        .start()
        .wait()
        ,
    getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("03") )
     .print()
     ,
    newTimer(1500)
        .start()
        .wait()
        ,
    getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("04") )
     .print()
     ,
    newTimer(1500)
        .start()
        .wait()
             ,

    getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("05") )
     .print()
     ,

newAudio("audiofile", "magic.mp3") // play audio
.play() 
,
    newTimer(2500)
        .start()
        .wait()
        ,
            getCanvas("myCanvas")
     .settings.center()
     .settings.add( "center at 50%" , "center at 50%" , getImage("06") )
     .settings.add(1, 100, getImage("left") )
     .settings.add(367, 100, getImage("center") )
    .settings.add(732, 100, getImage("right") )
     .print()
,
newVar("RT").global().set( v => Date.now() ) //RT measurement start
,
newSelector("shapes")
.add( getImage("left") , getImage("center") , getImage("right") )
    .settings.frame("dashed 3px black")
    .log()
    .wait()
,
    getVar("RT").set( v => Date.now() - v ) //RT measurement end
,   
newTimer("hurry", 1200)
    .start()
    .wait()
    
        
)
.log( "ReactionTime" , getVar("RT") )
.log( "ID", getVar("ID"))
.log("Trialtype",variable.TrialT)  
.log("TransformSide",variable.Transform)
.log("NounDist",variable.NounDist)
)
SendResults( "send" )


newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.pcibex.net/' href='_blank'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)