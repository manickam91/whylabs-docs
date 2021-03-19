const apis = require('./docs/whylogs-api/sidebar.json')
module.exports = {
  docs: [
    'intro',
    {
      Overview: ['concepts', 'profiling', 'open-spec', 'data-types'],
      "Use Cases": [
        'usecases-batch',
        'usecases-distributed',
        'usecases-streaming',
        'usecases-dataquality',
        'usecases-drift',
      ],
      "Data Logging": ['logger-overview', 'logger-python'],
      "Integrations": ['integrations-rest-container'],
      "WhyLabs Platform": ['whylabs-api', 'whylabs-architecture'],
    },
    {
      "whylogs API": apis.items[0].items,
    },
    'external-resources'
  ],
};
