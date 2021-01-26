export default [

    //    show/hide
    // Create/Maintain Player Functionality
    { subject: 'Players', actions: 'edit' },
    { subject: 'EditPlayer', actions: 'seeIntelNotes'},

    /**Profile*/
    { subject: 'Players', actions: 'seeEducation'},

    /**
     * IntelNotes
     */

    { subject: 'IntelNotes', actions: 'edit'},
    { subject: 'EditPlayers', actions: 'edit' },

    { subject: 'Players', actions: 'filterByStatus' },
];