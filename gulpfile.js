// gulpfile.js：Gulpを使う時に必要なファイル
//             この中にGulpにやってほしいことを書く

// Gulp：タスクランナー
// 今回作るタスク：scssをcssに変換するタスク

// gulpを読み込み
const gulp = require('gulp');

// gulpでsassを使うために、gulp-sassを読み込む
const sass = require('gulp-sass');

// Gulpのタスクを作る
// gulp.task('タスク名', function () {
//   return (
//     // タスクの内容
//   )
// })

gulp.task('sass', function () {

  return (
    // sassフォルダのstyle.scssを取得
    gulp.src('sass/style.scss')
    .pipe(sass({
      // outputStyle: 'compressed'
    })) // 取得したscssをcssに変換
    .pipe(gulp.dest('css')) // 変換した結果をcssフォルダに出力
  )

})