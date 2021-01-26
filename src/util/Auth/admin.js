export default [
    // Grade Column visibility on Player List
    { subject: 'PlayerList', actions: 'seeGrade' },

    // Observations Columns visibility on Player List
    { subject: 'PlayerList', actions: 'seeObservations' },

    // Global Observations visibility
    { subject: 'Observations', actions: 'see' },

    // Observations Card visibility on Player Profile
    { subject: 'PlayerProfile', actions: 'seeObservations' },

    // Physical Performance Card visibility
    { subject: 'PlayerProfile', actions: 'seePhysicalPerformance' },

    // Grade Column visibility on Player Profile
    { subject: 'PlayerProfile', actions: 'seeGrade' },

    // Create/Maintain Player Functionality
    { subject: 'Players', actions: 'edit' },

    // Viewing of Post Camp Feedback Reports, IDP Reports, etc.
    { subject: 'Players', actions: 'viewReports' },

    // Uploading of Post Camp Feedback Reports, IDP Reports, etc.
    { subject: 'Players', actions: 'uploadReports' },

    // Player List & Squad View Grade Filter
    { subject: 'Players', actions: 'filterByGrade' },

    // Player List & Squad View Squad Status Filter
    { subject: 'Players', actions: 'filterByStatus' },

    { subject: 'MaintainPlayer', actions: 'add/edit' },
    /**
     * Intel Notes Permissions
     */
    // Education Intel Notes Visibility
    { subject: 'PlayerProfile', actions: 'viewEducationIntelNotes' },

    // Eligibility Intel Notes Visibility
    { subject: 'PlayerProfile', actions: 'viewEligibilityIntelNotes' },

    // General Intel Notes Visibility
    { subject: 'PlayerProfile', actions: 'viewGeneralIntelNotes' },

    // Add Education Intel Notes Capability
    { subject: 'Players', actions: 'addEducationIntelNotes' },

    // Add Eligibility Intel Notes Capability
    { subject: 'Players', actions: 'addEligibilityIntelNotes' },

    // Add General Intel Notes Capability
    { subject: 'Players', actions: 'addGeneralIntelNotes' },

    { subject: 'PlayerComparisons', actions: 'seeTecTac' },

    /**
     * MVCI Permissions
     */
    //MVCI Overall Visibility Card
    { subject: 'PlayerProfile', actions: 'viewMVCICard' },

    // Maturation Visibility
    { subject: 'PlayerProfile', actions: 'viewMaturationStatus' },

    // Capability Visibility
    { subject: 'PlayerProfile', actions: 'viewCapabilityStatus' },

    // Vulnerability Visibility
    { subject: 'PlayerProfile', actions: 'viewVulnerabilityStatus' },

    // Injury Visibility
    { subject: 'PlayerProfile', actions: 'viewInjuryStatus' },

    // add Maturation Visibility
    { subject: 'Players', actions: 'addviewMaturationStatus' },

    // add Capability Visibility
    { subject: 'Players', actions: 'addviewCapabilityStatus' },

    // add Vulnerability Visibility
    { subject: 'Players', actions: 'addviewVulnerabilityStatus' },

    // add Injury Visibility
    { subject: 'Players', actions: 'addviewInjuryStatus' },

    /**
     * PPC Permissions
     */
    // PPC Visibility
    { subject: 'PPC', actions: 'see' },

    // PPC Coach Report Visibility
    { subject: 'PPC', actions: 'seeCoachReport' },

    // PPC Squad Report Visibility
    { subject: 'PPC', actions: 'seeSquadReport' },

    // PPC Player & Club Report Visibility
    { subject: 'PPC', actions: 'seePlayerClubReport' },

    // PPC Programming Report Visibility
    { subject: 'PPC', actions: 'seeProgrammingReport' },

    // PPC Upload Data Capability
    { subject: 'PPC', actions: 'uploadData' },

    /**
     * Status Permissions
     */
    // Status History Visibility
    { subject: 'PlayerProfile', actions: 'seeStatusHistory' },
    // Status Visibility
    { subject: 'PlayerProfile', actions: 'seeStatus' },

    // add Status Visibility
    { subject: 'PlayerProfile', actions: 'addStatus' },

    { subject: 'wellbeing', actions: 'see' },

    /**
     * Analysis + Insight
     */
    { subject: 'Analysis+Insight', actions: 'see' },
    { subject: 'Analysis+Insight', actions: 'uploadData' },

    /**Player Edit Flow*/
    { subject: 'EditPlayer', actions: 'seeMappings'},
    { subject: 'EditPlayer', actions: 'seeGrade'},
    { subject: 'EditPlayer', actions: 'seeIntelNotes'},

    /**Profile*/
    { subject: 'Players', actions: 'seeEligibility'},
    { subject: 'Players', actions: 'seeEducation'},
    { subject: 'Players', actions: 'seeGeneral'},
    { subject: 'Players', actions: 'seeStatusHistory'},
    { subject: 'Players', actions: 'seeCapability'},
    { subject: 'Players', actions: 'seeMaturation'},
    { subject: 'Players', actions: 'seeVulnerability'},
    { subject: 'Players', actions: 'seeInjury'},
    { subject: 'Players', actions: 'seeMCVIStatus'},
    // { subject: 'Players', actions: 'seeDevelopmentPlan'},
    // { subject: 'Players', actions: 'seePersonalityProfile'},
    // { subject: 'Players', actions: 'seePlayerFeedBackReport'},
    // { subject: 'Players', actions: 'seeReports'},

    /**Header*/
    { subject: 'PhysicalPerformance', actions: 'seePPCReports'},
    /**Player long list*/
    { subject: 'PlayersList', actions: 'changeStatus'},
    { subject: 'PlayersList', actions: 'exportCSV'},


    { subject: 'AddPlayers', actions: 'edit' },
    { subject: 'UploadPlayers', actions: 'edit' },
    { subject: 'EditPlayers', actions: 'edit' },
    { subject: 'Players', actions: 'seeGpsWellbeing' },

    // Edit privs

    /**
     * BIO
     */

    { subject: 'Bio', actions: 'edit'},

    /**
     * Squads
     */

    { subject: 'Squad', actions: 'edit'},

    /**
     * Grade
     */

    { subject: 'Grade', actions: 'edit'},

    /**
     * Club
     */

    { subject: 'Club', actions: 'edit'},

    /**
     * PlayingPosition
     */

    { subject: 'PlayingPosition', actions: 'edit'},

     /**
     * SocialLinks
     */

    { subject: 'SocialLinks', actions: 'edit'},
    /**
     * Eligibility
     */

    { subject: 'Eligibility', actions: 'edit'},

    /**
     * IntelNotes
     */

    { subject: 'IntelNotes', actions: 'edit'},

    { subject: 'EditPlayer', actions: 'delete' },

    { subject: 'ViewIntelNotes', actions: 'delete' },

    /**
     * DepthView flow - View Squad Reports
     */
    {subject: 'DepthViewPlayers', action: 'seeSquadReports'}

];