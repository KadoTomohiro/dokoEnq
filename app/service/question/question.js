(function() {
  'use strict';
  angular
    .module('dokoEnq.service.question', ['ngResource'])
    .service('questionService', questionService);

  questionService.$inject = ['$log', '$resource'];

  function questionService($log, $resource) {
    var get = function(enqueteId) {
      return {
        'title': 'セミナーについて',
        'discription': 'セミナーについてのご意見をお聞かせください',
        'open': true,
        'groups': {
          'group1': {
            'discription': '受講者情報',
            'questions': ['q1', 'q2']
          },
          'group2': {
            'discription': 'セミナーについて',
            'questions': ['q3', 'q4']
          }
        },
        'questions': {
          'q1': {
            'question': '氏名',
            'type': 'text',
            'format': 'text',
            'require': true
          },
          'q2': {
            'question': '所属',
            'type': 'select',
            'format': 'single',
            'items': ['JA', 'アグリ', 'モバイル', 'IDC', '営業', '金融', 'Sビジ'],
            'require': true
          },
          'q3': {
            'question': 'セミナーに参加した目的を教えてください',
            'type': 'select',
            'format': 'mulch',
            'items': ['業務活用のため', 'お客様提案のため', '学習のため'],
            'require': true
          },
          'q4': {
            'question': 'セミナーに参加した目的は達成できましたか',
            'type': 'select',
            'format': 'mulch',
            'items': ['達成できた', '概ね達成できた', 'あまり達成できなかった', '達成できなかった'],
            'require': true
          }
        }
      };
      // var question = $resource('dataSample2.json').get().$promise
      //   .then(function(questionJson) {
      //     $log.debug('get');
      //     $log.debug(questionJson);
      //     return angular.fromJson(questionJson).enquetes[enqueteId];
      //   });
      // return question;
    };
    var method = {
      get : get
    };
    return method;
  }
})();
