module.exports = {
    default: {
        import: [
            'dist/steps_local.js',
            'node_modules/webstorm-cucumber-steps-package-test/**/*.js'
        ],
        parallel: 1,
        format: ['html:cucumber-report.html']
    }
}