

export class Gift {
    constructor(data) {
        this.id = data.id
        this.opened = data.opened
        this.img = data.url || ''
        this.tag = data.tag || 'You do not have access'
    }
}