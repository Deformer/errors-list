const errorCodes = {
  badRequest: 'BAD_REQUEST_ERROR',
  conflict: 'CONFLICT_ERROR',
  notFound: 'NOT_FOUND_ERROR',
  unauthorized: 'UNAUTHORIZED_ERROR'
};

class HttpException extends Error {
  toJSON() {
    return { error: this.message };
  }
}

class BadRequestHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.code = errorCodes.badRequest;
    this.status = 400;
  }
}

class ConflictHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.code = errorCodes.conflict;
    this.status = 409;
  }
}

class NotFoundHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.code = errorCodes.notFound;
    this.status = 404;
  }
}

class UnauthorizedHttpException extends HttpException {
  constructor(msg) {
    super(msg);
    this.code = errorCodes.unauthorized;
    this.status = 401;
  }
}

module.exports = {
  BadRequestHttpException,
  ConflictHttpException,
  NotFoundHttpException,
  UnauthorizedHttpException,
  errorCodes,
};
