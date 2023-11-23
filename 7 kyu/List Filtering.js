function filter_list(l) {
    return l.filter((string) => typeof string !== 'string')
}