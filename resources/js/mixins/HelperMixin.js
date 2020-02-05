import md5 from 'md5'
import numeral from 'numeral'

export default {
    computed: {
        Canvas() {
            return window.Canvas
        },
    },

    methods: {
        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-]+/g, '')
                .replace(/--+/g, '-')
        },

        suffixedNumber(number) {
            if (number < 900) {
                return number
            } else {
                return numeral(number).format('0.0a')
            }
        },

        plural(string, count) {
            if (count > 1 || count === 0) {
                return ' ' + string + 's'
            } else {
                return ' ' + string
            }
        },

        trim(string, length = 70) {
            return _.truncate(string, {
                length: length,
            })
        },

        defaultGravatar(email, size = 200) {
            let hash = md5(email.trim().toLowerCase())

            return 'https://secure.gravatar.com/avatar/' + hash + '?s=' + size
        },

        mediaUploadPath() {
            return '/' + Canvas.path + '/api/media/uploads'
        }
    },
}
