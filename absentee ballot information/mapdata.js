var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#1e3c6b",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "What you need to get ballot:",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "<b>What you need to register:</b><br>need driver's license or state ID and social security number<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>Driver's license, state ID, or social security number<br><b>How to get an absentee ballot:</b><br><ul><li>submit a paper application</li><li>bring or mail to county clerk</li></ul><br><b>What to do once you have received the ballot:</b><br><ul><li>Carefully read and follow instructions</li><li>Sign where indicated</li></ul><b>When the ballot needs to be received:</b><br><ul><li>7pm on Election Day<br>",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    AK: {
      name: "Alaska",
      description: "<b>What you need to register:</b><br>need driver's license or state ID<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>If you are voting for the first time and did not provide ID when registering to vote:<ul><li>Driver's license</li><li>state ID</li><li>birth certificate</li><li>passport</li><li>any other form of photo ID</li></ul><b>How to get an absentee ballot:</b><ul><li>submit an online or paper application</li><li>mail to Absentee and Petition Office</li></ul><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li><li>Have a witness sign your ballot</li></ul><b>When the ballot needs to be received:</b><br>Received 10 days before Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    FL: {
      name: "Florida",
      description: "<b>What you need to register:</b><ul><li>driver's license or state ID</li><li>issue date</li><li>social security number</li></ul><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><ul><li>driver's license, state ID, or last four digits of SSN</li><li>voter's signature (if request is written)</li></ul><b>How to get an absentee ballot:</b><ul><li>submit online or paper application (county specific)</li><li>if paper application, mail to county Supervisor of Elections office</li></ul><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NH: {
      name: "New Hampshire",
      description: "<b>What you need to register:</b><br>need driver's license or state ID and passport or birth certificate<br><b>Where to register to vote:</b><br>In person<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><ul><li>submit a paper application</li><li>bring or mail to county clerk</li></ul><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 5pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    VT: {
      name: "Vermont",
      description: "<b>What you need to register:</b><br>need driver's license, state ID, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license, state ID, or SSN (if doing paper application, N/A)<br><b>How to get an absentee ballot:</b><br>Submit an online application or return a paper application to town clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by close of business day before Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ME: {
      name: "Maine",
      description: "<b>What you need to register:</b><br>need driver's license, state ID, or SSN<br><b>Where to register to vote:</b><br>In person at town office or DMV or online<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><br>Submit an online application or submit a paper application to town clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by municipal clerk by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    RI: {
      name: "Rhode Island",
      description: "<b>What you need to register:</b><br>driver's license, state ID, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID<br><b>How to get an absentee ballot:</b><br>submit an online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NY: {
      name: "New York",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID or driver's license and SSN<br><b>How to get an absentee ballot:</b><br>submit an online application or submit a paper application to county board of elections<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked on Election Day and received 7 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    PA: {
      name: "Pennsylvania",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or SSN<br><b>How to get an absentee ballot:</b><br>Submit an online application or paper application returned to county board of elections<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NJ: {
      name: "New Jersey",      
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by 8pm on Election Day and received 6 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    DE: {
      name: "Delaware",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>SSN<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MD: {
      name: "Maryland",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID or driver's license<br><b>How to get an absentee ballot:</b><br>submit an online application or submit a paper application to county board of elections<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked on Election Day and received by 10am 10 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    VA: {
      name: "Virginia",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>SSN<br><b>How to get an absentee ballot:</b><br>submit an online application or submit a paper application to voter registration office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked on Election Day and received by 12pm 3 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WV: {
      name: "West Virginia",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or SSN<br><b>How to get an absentee ballot:</b><br>submit an online application or bring or mail paper application county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked on Election Day and received 5 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    OH: {
      name: "Ohio",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or SSN<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked the day before Election Day and received 4 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    IN: {
      name: "Indiana",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, SSN, or voter ID<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 6pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    IL: {
      name: "Illinois",
      description: "<b>What you need to register:</b><br>state ID or driver's license, issue date, and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or SSN<br><b>How to get an absentee ballot:</b><br>submit an online application for your county or submit a paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked on Election Day and received 14 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    CT: {
      name: "Connecticut",
      description: "<b>What you need to register:</b><br>need driver's license or state ID<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>If you are voting for the first time and did not provide ID when registering to vote: <br>photocopy of a current photo ID<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to town clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by close of polls on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WI: {
      name: "Wisconsin",
      description: "<b>What you need to register:</b><br>need driver's license or state ID<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>Photocopy of driver's license or state ID<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign Certification of Voter section</li><li>Have witness complete Certification of Witness Section</li></ul><b>When the ballot needs to be received:</b><br>Received by close of polls on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NC: {
      name: "North Carolina",
      description: "<b>What you need to register:</b><br>need to make NCDMV account and driver's license, state ID, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>Driver's license, state ID or SSN<br><b>How to get an absentee ballot:</b><br>Online application or bring or mail paper application to county board of elections<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li><li>Mark ballot in presence of two witnesses or a notary</li><li>Seal ballot and complete Absentee Application and Certificate on the back of the envelope</li><li>Have witness/notary complete certification portion on envelope</li></ul><b>When the ballot needs to be received:</b><br>Received by 7:30pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    DC: {
      name: "District of Columbia",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or SSN<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked the day before Election Day and received 10 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MA: {
      name: "Massachusetts",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or SSN<br><b>How to get an absentee ballot:</b><br>Online application or bring or mail paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    TN: {
      name: "Tennessee",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>SSN<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to county election commission office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    AR: {
      name: "Arkansas",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>state ID or driver's license<br><b>How to get an absentee ballot:</b><br>bring paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Provide photocopy of photo ID</li><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 7:30pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MO: {
      name: "Missouri",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>SSN<br><b>How to get an absentee ballot:</b><br>bring or mail paper application to local election official<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li><li>Fill out statement on ballot evelope when sealed</li><li>Have notary sign the ballot before mailing</li></ul><b>When the ballot needs to be received:</b><br>Received by close of polls on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    GA: {
      name: "Georgia",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID or driver's license<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by the time polls close on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SC: {
      name: "South Carolina",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>SSN<br><b>How to get an absentee ballot:</b><br>call county voter registration office to request paper application and return to voter registration office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign oath printed on return envelope</li><li>Must have witness sign as well</li></ul><b>When the ballot needs to be received:</b><br>Received by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    KY: {
      name: "Kentucky",
      description: "<b>What you need to register:</b><br>SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>SSN<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 6pm on Election Day",
      color: "default",
      zoomable: "no",
      hover_color: "default",
      url: "default"
    },
    AL: {
      name: "Alabama",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or other valid form of photo ID<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>state ID, driver's license, or other valid form of photo ID<br><b>How to get an absentee ballot:</b><br>write or visit local Absentee Election Manager to request application. Mail or bring application back to Absentee Election Manager<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date the affidavit where indicated</li><li>A notary or two witnesses must sign the absentee ballot envelope</ul><b>When the ballot needs to be received:</b><br>Received by 12pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    LA: {
      name: "Louisiana",
      description: "<b>What you need to register:</b><br>State ID or driver's license and audit code on the front of your ID<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID and SSN<br><b>How to get an absentee ballot:</b><br>Online application or bring or mail paper application to your parish of registrar of voters<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 4:30pm the day before Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MS: {
      name: "Mississippi",
      description: "<b>What you need to register:</b><br>State ID, driver's license or SSN<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>driver's license, state ID, or SSN and a notary<br><b>How to get an absentee ballot:</b><br>Call your circuit clerk to request a paper application and return to circuit clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by Election Day and received by 5 business days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    IA: {
      name: "Iowa",
      description: "<b>What you need to register:</b><br>ID and SSN<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>driver's license, state ID, or voter ID PIN on voter ID card<br><b>How to get an absentee ballot:</b><br>Bring or mail paper application to county auditor<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MN: {
      name: "Minnesota",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br><ul><li>driver's license, state ID, and SSN for paper application</li><li>SSN for online application</li></ul><b>How to get an absentee ballot:</b><br>Online application or bring or mail paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>A witness (notary or registered Minnesota voter) must sign your ballot<li>Sign where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    OK: {
      name: "Oklahoma",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID and SSN<br><b>How to get an absentee ballot:</b><br>Online application or bring or mail paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    TX: {
      name: "Texas",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>Driver's license, state ID, or SSN<br><b>How to get an absentee ballot:</b><br>Mail paper application to county early voting clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by 7pm on Election Day and received by 5pm the day after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NM: {
      name: "New Mexico",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID and SSN<br><b>How to get an absentee ballot:</b><br>Online application or bring or mail paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    KS: {
      name: "Kansas",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID<br><b>How to get an absentee ballot:</b><br>Bring, mail, or email paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by Election Day and received by 3 days after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NE: {
      name: "Nebraska",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID<br><b>How to get an absentee ballot:</b><br>Bring, mail, or email paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by close of polls on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    SD: {
      name: "South Dakota",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>driver's license or state ID or notary signed application<br><b>How to get an absentee ballot:</b><br> Mail paper application to local election official<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ND: {
      name: "North Dakota",
      description: "<b>What you need to register:</b><br>North Dakota does not require voter registration<br><b>What you need to get a ballot:</b><br>driver's license or state ID<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked one day before Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WY: {
      name: "Wyoming",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>In person<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><br>Bring or mail paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MT: {
      name: "Montana",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Paper form<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><br>Bring, mail, or email paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    CO: {
      name: "Colorado",
      description: "<b>What you need to register:</b><br>state ID or driver's license and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>If you are voting for the first time and did not provide ID when registering to vote:<ul><li>Driver's license</li><li>state ID</li><li>birth certificate</li><li>passport</li><li>any other form of photo ID</li></ul><b>How to get an absentee ballot:</b><br>Change mailing address when registering or contact local county official to change mailing address<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Recieved by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    UT: {
      name: "Utah",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license, state ID, or SSN<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked the day before Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    AZ: {
      name: "Arizona",
      description: "<b>What you need to register:</b><br>state ID or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>If you are voting for the first time and did not provide ID when registering to vote: <br>photocopy of a current photo ID<br><b>How to get an absentee ballot:</b><br>Online application or paper application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 7pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NV: {
      name: "Nevada",
      description: "<b>What you need to register:</b><br>state ID, driver's license, or SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license or state ID<br><b>How to get an absentee ballot:</b><br>Online application or paper voter registration form<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked on or before Election Day and received by the 4th day after",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    OR: {
      name: "Oregon",
      description: "<b>What you need to register:</b><br>state ID or driver's license OR the form will print and you will need to bring it to the county's election office<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><br>Bring or mail paper application to county election office<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by Election Day and received no later than 7 day after Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    WA: {
      name: "Washington",
      description: "<b>What you need to register:</b><br>state ID, or driver's license<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>N/A<br><b>How to get an absentee ballot:</b><br>Update address on voter registration online<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    CA: {
      name: "California",
      description: "<b>What you need to register:</b><br>state ID, driver's license, and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>If you are voting for the first time and did not provide ID when registering to vote: <br>photocopy of a current photo ID<br><b>How to get an absentee ballot:</b><br>Contact local county official to change mail address<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Postmarked by Election Day and received no later than 7 days after the Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MI: {
      name: "Michigan",
      description: "<b>What you need to register:</b><br>state ID, driver's license, and SSN<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license, state ID, or SSN<br><b>How to get an absentee ballot:</b><br>Online application or mail or return paper application to county clerk<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by city or township clerk by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ID: {
      name: "Idaho",
      description: "<b>What you need to register:</b><br>driver's license or voting ID<br><b>Where to register to vote:</b><br>Online<br><b>What you need to get a ballot:</b><br>driver's license, state ID, or SSN<br><b>How to get an absentee ballot:</b><br>Online application<br><b>What to do once you have received the ballot:</b><ul><li>Carefully read and follow instructions</li><li>Sign and date where indicated</li></ul><b>When the ballot needs to be received:</b><br>Received by 8pm on Election Day",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};