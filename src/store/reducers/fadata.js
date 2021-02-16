
import {
    GET_CONTACT_WINDOW,
    GET_NEW_CONTACT_WINDOW,
    GET_READ_CONTACT,
    GET_HEADER_DRAWER,
    GET_ENGAGEMENTS_FILTERS,
    GET_NEW_ENGAGEMENTS_WINDOW
} from '../constants/auth';


const INIT_STATE = {
    todos: [],
    staff: [
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ],

        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        },
        {
            basicInfo: { staff_name: 'DAVID HAMPSHIRE', role: 'STAFF ROLE', email: 'DAVID.HAMPSHIRE@THEFA.COM', home: "+4407480769082", work: "+4407480769082", mobile: "4407480769082" },
            engagementHistory: [
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" },
                { date: "10/10/2020", site: "Leicester City Fc Academy", activity_description: "General", contacts: "Adam Barradell", duration: "360", status: "Completed", visit_summary: "Coaches the 16's with Adam Barradel, also saw the first team train" }
            ]
        }
    ],
    contacts: [
        {
            basicInfo: { contact_name: 'JUSTIN BOWLY', role: 'HEAD COACH', club: 'LEICESTER FOOTBALL CLUB', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", club: "Leicester City FC", staff: "Alan Connell" }
            ]
            , learningHistory: [
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
            ]
        },
        {
            basicInfo: { contact_name: 'JUSTIN BOWLY', role: 'HEAD COACH', club: 'LEICESTER FOOTBALL CLUB', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", club: "Leicester City FC", staff: "Alan Connell" }
            ]
            , learningHistory: [
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
            ]
        },
        {
            basicInfo: { contact_name: 'JUSTIN BOWLY', role: 'HEAD COACH', club: 'LEICESTER FOOTBALL CLUB', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", club: "Leicester City FC", staff: "Alan Connell" }
            ]
            , learningHistory: [
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
            ]
        },
        {
            basicInfo: { contact_name: 'JUSTIN BOWLY', role: 'HEAD COACH', club: 'LEICESTER FOOTBALL CLUB', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", club: "Leicester City FC", staff: "Alan Connell" }
            ]
            , learningHistory: [
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
                // { list: "Jason Tindall", completed_date: "10/10/2020" },
            ]
        },
        {
            basicInfo: { contact_name: 'JUSTIN BOWLY', role: 'HEAD COACH', club: 'LEICESTER FOOTBALL CLUB', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", club: "Leicester City FC", staff: "Alan Connell" }
            ]
            , learningHistory: [
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
            ]
        },
        {
            basicInfo: { contact_name: 'JUSTIN BOWLY', role: 'HEAD COACH', club: 'LEICESTER FOOTBALL CLUB', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", club: "Leicester City FC", staff: "Alan Connell" }
            ]
            , learningHistory: [
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
                { list: "Jason Tindall", completed_date: "10/10/2020" },
            ]
        }
    ],
    engagements: [
        {
            planned: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "planned", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            completed: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "completed", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            cancelled: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "cancelled", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },


        },
        {
            planned: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "planned", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            completed: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "completed", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            cancelled: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "cancelled", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },

        },
        {
            planned: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "planned", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            completed: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "completed", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            cancelled: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "cancelled", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },

        },
        {
            planned: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "planned", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            completed: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "completed", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            cancelled: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "cancelled", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },

        },
        {
            planned: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "planned", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            completed: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "completed", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            cancelled: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "cancelled", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },

        },
        {
            planned: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "planned", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            completed: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "completed", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },
            cancelled: { date: "10/10/2020", club_name: "Leicester City Fc Academy", contacts: "Justin Bowley", _staff: "Moor Farm Tranning Center (Derby Country Acadmey)", status: "cancelled", staff: "Alan Connel", visit_summary: "Discussion on the development an fausting anjorin" },

        },
    ],
    clubs: [
        {
            basicInfo: { club_name: 'LEICESTER FOOTBALL CLUB', main_ground: 'KING POWER STADIUM', training_ground: 'BELVOIR DRIVE TRAINING GROUND', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", contact: "Justin Bowley", staff: "Justin Bowley" },
            ]
            , contacts: [
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },

            ],
            club_names: ['LEICESTER FOOTBALL CLUB', 'LEICESTER FOOTBALL CLUB', 'LEICESTER FOOTBALL CLUB', 'LEICESTER FOOTBALL CLUB', 'LEICESTER FOOTBALL CLUB', 'LEICESTER FOOTBALL CLUB']
        },
        {
            basicInfo: { club_name: 'LEICESTER FOOTBALL CLUB', main_ground: 'KING POWER STADIUM', training_ground: 'BELVOIR DRIVE TRAINING GROUND', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", contact: "Justin Bowley", staff: "Justin Bowley" },
            ]
            , contacts: [
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },

            ]
        },
        {
            basicInfo: { club_name: 'LEICESTER FOOTBALL CLUB', main_ground: 'KING POWER STADIUM', training_ground: 'BELVOIR DRIVE TRAINING GROUND', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", contact: "Justin Bowley", staff: "Justin Bowley" },
            ]
            , contacts: [
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },

            ]
        },
        {
            basicInfo: { club_name: 'LEICESTER FOOTBALL CLUB', main_ground: 'KING POWER STADIUM', training_ground: 'BELVOIR DRIVE TRAINING GROUND', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", contact: "Justin Bowley", staff: "Justin Bowley" },
            ]
            , contacts: [
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },

            ]
        },
        {
            basicInfo: { club_name: 'LEICESTER FOOTBALL CLUB', main_ground: 'KING POWER STADIUM', training_ground: 'BELVOIR DRIVE TRAINING GROUND', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", contact: "Justin Bowley", staff: "Justin Bowley" },
            ]
            , contacts: [
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },

            ]
        },
        {
            basicInfo: { club_name: 'LEICESTER FOOTBALL CLUB', main_ground: 'KING POWER STADIUM', training_ground: 'BELVOIR DRIVE TRAINING GROUND', league: "PREMIER LEAGUE" }
            , engagementHistory: [
                { date: "10/10/2020", contact: "Justin Bowley", staff: "Justin Bowley" },
            ]
            , contacts: [
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },
                { name: "Jason Tindall", role: "Manager", email: "jason@bournemouthafc.com", contact_number: "07480769082" },

            ]
        },
    ],
    open: false,
    //in add contact 
    readContactonly: false,
    openNewContact: false,
    openHeaderDrawer: false,
    EngagementsFilterFlag: 1,
    openNewEngagement: false,

}

export default (state = INIT_STATE, action) => {
    // let { openDrawer} = action.payload;
    const newState = { ...state };
    // const state = { ...state };
    switch (action.type) {
    

        case GET_CONTACT_WINDOW:
            return {
                ...state,
                open : action.payload
            };
            // break
        case GET_NEW_CONTACT_WINDOW:
            return {
                ...state,
                readContactonly : action.payload
            };
            // break
        case GET_READ_CONTACT:
            return {
                ...state,
                openHeaderDrawer : action.payload
            };
            // break
        case GET_HEADER_DRAWER:
            console.log("value acttionn: ",action.payload);
            return {
                // ...state,
                   ...state,
                openHeaderDrawer :  action.payload
            };
// break
        case GET_ENGAGEMENTS_FILTERS:
            return {
                ...state,
                EngagementsFilterFlag : action.payload
            };
            // break
        case GET_NEW_ENGAGEMENTS_WINDOW:
            return {
                ...state,
                openNewEngagement : action.payload
            };
            // break
        // case "isConatctWindow":
        //     newState.open = action.value
        //     console.log("form contact window open", newState.open)
        //     break
        // case "isNewConatctWindow":
        //     newState.openNewContact = action.value
        //     break
        // case "isreadContactOnly":
        //     newState.readContactonly = action.value
        //     break
        // case "isHeaderDrawer":
        //     console.log("form contact window open", newState.openHeaderDrawer)

        //     newState.openHeaderDrawer = action.value
            
        //     case "EngagementsFilterTable":
        //         newState.EngagementsFilterFlag = action.value
        //         break
        //         case "isNewEngagementWindow":
        //             newState.openNewEngagement = action.value
        //             break
        default:
            return state;
    }
}
