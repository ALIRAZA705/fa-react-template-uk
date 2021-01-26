import { AbilityBuilder } from '@casl/ability';
import ADMIN from './admin';
import PA from './pa';
import TID from './tid';
import PM from './pm';
import PPN from './ppn';
import PTD from './ptd';
import TEAM_OPERATIONS from './team_operations';
import PLAYER_EDUCATION from './player_education';
import NATIONAL_COACHES from './national_coaches';
import WD from './wd';
import TECHNICAL_DIRECTORATE from './technical_directorate';
import PM_CONSULTANTS from './pm_consultants';
import PPN_CONSULTANTS from './ppn_consultants';

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
    if (!item || typeof item === 'string') {
        return item;
    }

    return item.__type;
}

export const GROUPS = {
    ADMIN,
    PA,
    TID,
    PM,
    PPN,
    PTD,
    TEAM_OPERATIONS,
    PLAYER_EDUCATION,
    NATIONAL_COACHES,
    WD,
    TECHNICAL_DIRECTORATE,
    PM_CONSULTANTS,
    PPN_CONSULTANTS
};

export default AbilityBuilder.define({ subjectName }, can => {
    can(['seeFullName', 'seeDateOfBirth'], 'PlayerList');
});