export default [

//    show/hide
    // Create/Maintain Player Functionality
    { subject: 'Players', actions: 'edit' },
    { subject: 'EditPlayer', actions: 'seeGrade'},
    { subject: 'EditPlayer', actions: 'seeIntelNotes'},

    /**Profile*/
    { subject: 'Players', actions: 'seeGeneral'},
    { subject: 'PlayerProfile', actions: 'seeGrade'},
    { subject: 'Players', actions: 'seeCapability'},
    { subject: 'Players', actions: 'seeMaturation'},
    { subject: 'Players', actions: 'seeVulnerability'},
    { subject: 'Players', actions: 'seeInjury'},
    { subject: 'Players', actions: 'seeMCVIStatus'},
    { subject: 'PlayerProfile', actions: 'seeObservations' },
    { subject: 'PlayerList', actions: 'seeObservations' },
    // { subject: 'Players', actions: 'seeDevelopmentPlan'},
    // { subject: 'Players', actions: 'seePlayerFeedBackReport'},
    // { subject: 'Players', actions: 'seeReports'},
    // Player List & Squad View Squad Status Filter
    { subject: 'Players', actions: 'filterByStatus' },
    { subject: 'Players', actions: 'filterByDoNotMonitor' },
    { subject: 'EditPlayers', actions: 'edit' },

    { subject: 'PlayerList', actions: 'seeGrade' },
    { subject: 'PlayerComparisons', actions: 'seeTecTac' },


    /**
     * IntelNotes
     */

    { subject: 'IntelNotes', actions: 'edit'},



];