const initState = {
    themeId: 1,
}
type ThemeType = { themeId: number }

export const themeReducer = (state: ThemeType = initState, action: ActionType): ThemeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

type ActionType = changeThemeIdType
type changeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const // fix any
