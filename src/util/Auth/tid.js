export default [
    // Grade Column visibility on Player List
    { subject: 'PlayerList', actions: 'seeGrade' },

    // Grade Column visibility on Player Profile
    { subject: 'PlayerProfile', actions: 'seeGrade' },

    // Observations Columns visibility on Player List
    { subject: 'PlayerList', actions: 'seeObservations' },

    // Create/Maintain Player Functionality
    { subject: 'Players', actions: 'edit' },
    { subject: 'MaintainPlayer', actions: 'add/edit' },
    { subject: 'PlayerComparisons', actions: 'seeTecTac' },

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
    { subject: 'PlayerProfile', actions: 'addviewMaturationStatus' },

    // add Capability Visibility
    { subject: 'PlayerProfile', actions: 'addviewCapabilityStatus' },

    // add Vulnerability Visibility
    { subject: 'PlayerProfile', actions: 'addviewVulnerabilityStatus' },

    // add Injury Visibility
    { subject: 'PlayerProfile', actions: 'addviewInjuryStatus' },

    /**
     * Status Permissions
     */
    // Status History Visibility
    { subject: 'PlayerProfile', actions: 'seeStatusHistory' },
    // Status Visibility
    { subject: 'PlayerProfile', actions: 'seeStatus' },

    // add Status Visibility
    { subject: 'PlayerProfile', actions: 'addStaus' },


    /**Player Edit Flow*/
    { subject: 'EditPlayer', actions: 'seeMappings' },
    { subject: 'EditPlayer', actions: 'seeGrade' },
    { subject: 'EditPlayer', actions: 'seeIntelNotes' },


    /**Profile*/
    { subject: 'Players', actions: 'seeEligibility' },
    { subject: 'Players', actions: 'seeEducation' },
    { subject: 'Players', actions: 'seeGeneral' },
    { subject: 'Players', actions: 'seeStatusHistory' },
    { subject: 'Players', actions: 'seeCapability' },
    { subject: 'Players', actions: 'seeMaturation' },
    { subject: 'Players', actions: 'seeVulnerability' },
    { subject: 'Players', actions: 'seeInjury' },
    { subject: 'Players', actions: 'seeMCVIStatus' },
    { subject: 'PlayerProfile', actions: 'seeObservations' },
    // { subject: 'Players', actions: 'seeDevelopmentPlan'},
    // { subject: 'Players', actions: 'seePlayerFeedBackReport'},
    { subject: 'Players', actions: 'viewReports' },
    { subject: 'PlayersList', actions: 'changeStatus' },
    { subject: 'PlayersList', actions: 'exportCSV' },
    // Player List & Squad View Squad Status Filter
    { subject: 'Players', actions: 'filterByStatus' },
    { subject: 'AddPlayers', actions: 'edit' },
    { subject: 'UploadPlayers', actions: 'edit' },
    { subject: 'EditPlayers', actions: 'edit' },


    //Read-only Player Edit

    // Edit privs

    /**
     * BIO
     */

    { subject: 'Bio', actions: 'edit' },

    /**
     * Grade
     */

    { subject: 'Grade', actions: 'edit' },

    /**
     * Club
     */

    { subject: 'Club', actions: 'edit' },

    /**
     * PlayingPosition
     */

    { subject: 'PlayingPosition', actions: 'edit' },

    /**
     * Eligibility
     */

    { subject: 'Eligibility', actions: 'edit' },


    /**
     * SocialLinks
     */

    { subject: 'SocialLinks', actions: 'edit' },

    /**
     * IntelNotes
     */

    { subject: 'IntelNotes', actions: 'edit' },

    { subject: 'ViewIntelNotes', actions: 'delete' },

    /**
     * Squads
     */

    { subject: 'Squad', actions: 'edit' },

    { subject: 'EditPlayer', actions: 'delete' },

    /**
     * DepthView flow - View Squad Reports
     */
    { subject: 'DepthViewPlayers', action: 'seeSquadReports' }
];