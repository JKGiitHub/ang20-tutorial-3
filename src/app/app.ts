import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComments } from './article-comments/article-comments';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ArticleComments
  ],
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <h1>What are deferrable views?</h1>
        <p>A fully rendered Angular page may contain many different components, directives, and pipes. While certain parts of the page should be shown to the user immediately, there may be portions that can wait to display until later. Angular's deferrable views, using the a-defer syntax, can help you speed up your application by telling Angular to wait to download the JavaScript for the parts of the page that don't need to be shown right away.</p>
        <p>By default, a-defer loads the article-comments component when the browser is idle.</p>
        <p><a href="https://angular.dev/guide/templates/defer#triggers"> Learn more in the full deferrable views documentation </a></p>
               <p>By default, defer blocks do not render any content before they are triggered. The a-placeholder is an optional block that declares content to show before the deferred content loads. Angular replaces the placeholder with the deferred content after loading completes. While this block is optional, the Angular team recommends always including a placeholder.</p>
        <p>The a-placeholder block accepts an optional parameter to specify the minimum amount of time that this placeholder should be shown. This minimum parameter is specified in time increments of milliseconds (ms) or seconds (s). This parameter exists to prevent fast flickering of placeholder content in the case that the deferred dependencies are fetched quickly.</p>
        <br>
        <p>
          Angular is my favorite framework, and
          this is why. Angular has the coolest
          deferrable view feature that makes defer
          loading content the easiest and most
          ergonomic it could possibly be.
        </p>
      </article>
      <input type="checkbox" name="name_autoload" id="id_autoload" #autoload>
      <button type="button" #showComments>Show all comments</button>
      
      @defer (on hover; on interaction(showComments); when (autoload.checked) ) {
        <article-comments />
      
      } @placeholder (minimum 1s) {
         <p>Placeholder for comments.</p>
     
      } @loading (minimum 2s; after 500ms) {
        <p>Loading comments...</p>
      
      } @error {
        <p>Failed to load comments</p>
      }
    </div>
  `,
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('ang20-tutorial-3');
}