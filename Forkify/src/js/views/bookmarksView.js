import PreviewView from './previewView';


class BookmarksView extends PreviewView {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find an bookmark a recipe';

    addHandlerListener(handler) {
        window.addEventListener('load', handler)
        handler()
    }
}


export default new BookmarksView();