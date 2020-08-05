import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER': {
            return {
                ...state, 
                text: action.filters.text
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state, 
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state, 
                sortBy: 'date'
            }
        }
        case 'SET_START_DATE': {
            return {
                ...state, 
                startDate: action.filters.startDate
            }
        }
        case 'SET_END_DATE': {
            return {
                ...state, 
                endDate: action.filters.endDate
            }
        }
        default:
            return state
    }
}

export default filterReducer;